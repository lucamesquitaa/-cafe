export enum TypeCafeEnum {
  Cafeteria = 1
}

export interface GetAllCafeterias {
  id: string;
  nome: string;
  endereco: string;
  numero: string;
  complemento: string;
  cep: string;
  fotoPrincipal?: string;
  categoriaPrincipal: TypeCafeEnum;
}

export interface GetCafeteriaById {
  id: string;
  nome: string;
  rede: string;
  url: string;
  descricao: string;
  diferencial: string;
  ativo: boolean;
  endereco: string;
  numero: string;
  cep: string;
  cidade: string;
  estado: string;
  complemento: string;
  fotoPrincipal?: string;
  categoriaPrincipal: TypeCafeEnum;
  criadoEm: string;
}
