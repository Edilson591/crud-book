import { Books } from "@prisma/client";
import prismaClient from "../dataBase";
import { UpdateBookBody } from "../interface/BooksInterface";

class UpdateBooksServices {
  async execute({
    categoria,
    descricao,
    disponibilidade,
    titulo,
    autor,
    id,
    update_at
  }: UpdateBookBody) {
    const books = await prismaClient.books.update({
      where: {
        id,
      },
      data: {
        autor,
        categoria,
        descricao,
        disponibilidade,
        titulo,
        update_at
      },
    });
    return books
  }
}

export { UpdateBooksServices };

// DATABASE_URL="mongodb+srv://edilson591:xSfLtrkr6ReNzZAH@books.bozhe.mongodb.net/books?retryWrites=true&w=majority"
// datasource db {
//   provider = "mongodb"
//   url      = env("DATABASE_URL")
// }

// model Books {
//   id        String   @id @default(uuid()) @map("_id")
//   categoria String?
//   descricao String
//   autor     String?
//   disponibilidade    Boolean?
//   titulo    String
//   create_at DateTime @default(now())
//   update_at DateTime @updatedAt
// }

