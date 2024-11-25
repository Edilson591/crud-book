export interface Books {
  categoria: string;
  descricao: string;
  autor: string | null
  disponibilidade: boolean;
  titulo: string;
  img: string
}


export interface DeleteUser {
  id: string;
}
