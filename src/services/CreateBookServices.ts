import { Books } from "@prisma/client";
import prismaClient from "../dataBase";

class CreateBookServices {
  async execute({
    categoria,
    descricao,
    disponibilidade,
    titulo,
    autor,
    img
  }: Omit<Books,"id" | "create_at" | "update_at">) {
    if (!titulo) {
      throw new Error("Adicione as informaçoes necessarias");
    }

    const books = await prismaClient.books.create({
      data: {
        autor,
        categoria,
        descricao,
        disponibilidade,
        titulo,
        img
      },
    });

    return books
  }
}

export { CreateBookServices };
