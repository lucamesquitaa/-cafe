/**
 * DTO GetAllPhotos devolvido por GET /api/Photos/cafeteria/{cafeteriaId}.
 *
 * Atenção: `alt` guarda o nome do objeto no bucket (ex.: "Nome da Cafeteria/IMG-<guid>.jpg"),
 * não um texto descritivo — por isso os componentes montam o próprio texto alternativo.
 */
export interface GetAllPhotos {
  id: string;
  alt: string;
  url: string;
  /** Foto em destaque da cafeteria (bool? no backend). */
  stared: boolean | null;
}

/** Imagem exibida quando a cafeteria ainda não tem fotos ou a URL do bucket falha. */
export const FOTO_PLACEHOLDER = 'assets/chHD.jpg';

/**
 * Foto de capa da galeria: a marcada como destaque (stared) ou, na falta, a primeira.
 */
export function escolherCapa(fotos: GetAllPhotos[]): GetAllPhotos | undefined {
  return fotos.find(foto => !!foto.stared) ?? fotos[0];
}
