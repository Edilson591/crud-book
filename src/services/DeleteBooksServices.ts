import prismaClient from "../dataBase";
import { DeleteUser } from "../interface/BooksInterface";

class DeleteBooksServices {
  async execute({ id }: DeleteUser) {
    if (!id) {
      throw new Error("Livro não encontrado");
    }

    const books = await prismaClient.books.findFirst({
      where: {
        id: id,
      },
    });

    if (!books) {
      throw new Error("Livro inexistente");
    }

    await prismaClient.books.delete({
      where: {
        id: books.id,
      },
    });
  }
}

export { DeleteBooksServices };
