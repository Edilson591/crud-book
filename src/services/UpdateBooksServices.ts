import { Books } from "@prisma/client";
import prismaClient from "../dataBase";

class UpdateBooksServices {
  async execute({
    id,
    categoria,
    descricao,
    disponibilidade,
    titulo,
    autor
  }: Omit<Books,"create_at" | "update_at">) {
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

