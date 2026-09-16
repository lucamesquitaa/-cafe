import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CafeteriaDetalhe, CafeteriaStateService } from '../cafeteria-state.service';

interface Foto {
  url: string;
  alt: string;
}

interface InicioViewModel {
  nome: string;
  descricao: string;
  diferencial: string;
  enderecoCompleto: string;
  mapaUrl: SafeResourceUrl;
  fotoPrincipal: Foto | null;
  fotosSecundarias: Foto[];
}

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  readonly vm$: Observable<InicioViewModel | null>;

  constructor(state: CafeteriaStateService, private sanitizer: DomSanitizer) {
    this.vm$ = state.detalhe$.pipe(map(detalhe => detalhe && this.montarViewModel(detalhe)));
  }

  private montarViewModel({ cafeteria, fotos }: CafeteriaDetalhe): InicioViewModel {
    const galeria: Foto[] = fotos.map(foto => ({ url: foto.url, alt: foto.alt || cafeteria.nome }));
    const destaque = fotos.findIndex(foto => foto.stared);
    const indicePrincipal = destaque >= 0 ? destaque : 0;

    const fotoPrincipal = galeria[indicePrincipal]
      ?? (cafeteria.fotoPrincipal ? { url: cafeteria.fotoPrincipal, alt: cafeteria.nome } : null);
    const fotosSecundarias = galeria.filter((_, indice) => indice !== indicePrincipal).slice(0, 2);

    const enderecoCompleto = `${cafeteria.endereco}, ${cafeteria.numero}`
      + (cafeteria.complemento ? ` - ${cafeteria.complemento}` : '')
      + `, ${cafeteria.cidade} - ${cafeteria.estado}`;

    const consultaMapa = encodeURIComponent(
      `${cafeteria.endereco} ${cafeteria.numero} ${cafeteria.cidade} ${cafeteria.estado}`
    );

    return {
      nome: cafeteria.nome,
      descricao: cafeteria.descricao,
      diferencial: cafeteria.diferencial,
      enderecoCompleto,
      mapaUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://maps.google.com/maps?q=${consultaMapa}&output=embed`
      ),
      fotoPrincipal,
      fotosSecundarias
    };
  }
}
