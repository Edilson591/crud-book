import { FastifyReply, FastifyRequest } from "fastify";
import { Books } from "../interface/BooksInterface";
import { UpdateBooksServices } from "../services/UpdateBooksServices";

class UpdateBooksControllers {
  async handle(
    request: FastifyRequest<{ Params: { id: string }; Body: Books }>,
    reply: FastifyReply
  ) {
    const { id } = request.params;
    const { categoria, descricao, disponibilidade, titulo, autor, img } =
      request.body as Omit<Books, "create_at" | "update_at">;
    const booksServices = new UpdateBooksServices();

    try {
      const books = await booksServices.execute({
        id,
        autor,
        categoria,
        descricao,
        disponibilidade,
        titulo,
        img,
      });
      return reply.send(books);
    } catch (error) {
      return reply.send(error);
    }
  }
}

export { UpdateBooksControllers };
