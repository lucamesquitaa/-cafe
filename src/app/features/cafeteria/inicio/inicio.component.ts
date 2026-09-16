import { Component, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetCafeteriaById } from 'src/app/shared/models/cafeteria.model';
import { FOTO_PLACEHOLDER, GetAllPhotos, escolherCapa } from 'src/app/shared/models/photo.model';
import { CafeteriaDetalhe, CafeteriaStateService } from '../cafeteria-state.service';

export interface FotoGaleria {
  id: string;
  url: string;
  alt: string;
}

interface InicioViewModel {
  nome: string;
  descricao: string;
  diferencial: string;
  enderecoCompleto: string;
  mapaUrl: SafeResourceUrl;
  /** Todas as fotos da cafeteria, com a capa (destaque) em primeiro — é o que o lightbox percorre. */
  fotos: FotoGaleria[];
  fotoPrincipal: FotoGaleria | null;
  fotosSecundarias: FotoGaleria[];
  /** Quantas fotos ficaram fora da grade (aparecem só no lightbox). */
  fotosOcultas: number;
}

/** Miniaturas exibidas ao lado da foto principal; o restante fica no lightbox. */
const MAX_SECUNDARIAS = 2;

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  readonly vm$: Observable<InicioViewModel | null>;

  /** Id da foto pela qual o lightbox abre. */
  fotoAtivaId = '';

  constructor(
    state: CafeteriaStateService,
    private sanitizer: DomSanitizer,
    private modal: NgbModal
  ) {
    this.vm$ = state.detalhe$.pipe(map(detalhe => detalhe && this.montarViewModel(detalhe)));
  }

  abrirGaleria(lightbox: TemplateRef<unknown>, foto: FotoGaleria): void {
    this.fotoAtivaId = foto.id;
    this.modal.open(lightbox, { size: 'xl', centered: true, windowClass: 'galeria-modal' });
  }

  /** Se a URL do bucket falhar, mostra o placeholder em vez de uma imagem quebrada. */
  usarPlaceholder(foto: FotoGaleria): void {
    if (foto.url !== FOTO_PLACEHOLDER) {
      foto.url = FOTO_PLACEHOLDER;
    }
  }

  private montarViewModel({ cafeteria, fotos }: CafeteriaDetalhe): InicioViewModel {
    const galeria = this.montarGaleria(cafeteria, fotos);
    const [fotoPrincipal = null, ...demais] = galeria;

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
      fotos: galeria,
      fotoPrincipal,
      fotosSecundarias: demais.slice(0, MAX_SECUNDARIAS),
      fotosOcultas: Math.max(0, demais.length - MAX_SECUNDARIAS)
    };
  }

  /**
   * Ordena as fotos da API com a capa (stared) em primeiro. O campo `alt` da API guarda o nome
   * do objeto no bucket, então o texto alternativo é montado a partir do nome da cafeteria.
   * Sem fotos na API, a fotoPrincipal cadastrada na cafeteria ainda ilustra a página.
   */
  private montarGaleria(cafeteria: GetCafeteriaById, fotos: GetAllPhotos[]): FotoGaleria[] {
    const capa = escolherCapa(fotos);
    const ordenadas = capa ? [capa, ...fotos.filter(foto => foto !== capa)] : [];

    if (!ordenadas.length) {
      return cafeteria.fotoPrincipal
        ? [{ id: 'principal', url: cafeteria.fotoPrincipal, alt: cafeteria.nome }]
        : [];
    }

    return ordenadas.map((foto, indice) => ({
      id: foto.id,
      url: foto.url,
      alt: `${cafeteria.nome} - foto ${indice + 1}`
    }));
  }
}
