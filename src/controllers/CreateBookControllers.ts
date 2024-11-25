import { FastifyReply, FastifyRequest } from "fastify";
import { CreateBookServices } from "../services/CreateBookServices";
import { Books } from "../interface/BooksInterface";

class CreateBookControllers {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { categoria, descricao, disponibilidade, titulo, autor,img } =
      request.body as Omit<Books, "id" | "create_at" | "update_at">;
    const booksServices = new CreateBookServices();

    try {
      const books = await booksServices.execute({
        autor,
        categoria,
        descricao,
        disponibilidade,
        titulo,
        img
      });
      return reply.status(201).send(books);
    } catch (error) {
      return reply.status(500).send(error)
    }
  }
}

export { CreateBookControllers };
