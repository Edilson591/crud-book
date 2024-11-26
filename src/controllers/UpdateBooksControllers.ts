import { FastifyReply, FastifyRequest } from "fastify";
import { Books, UpdateBookBody } from "../interface/BooksInterface";
import { UpdateBooksServices } from "../services/UpdateBooksServices";

class UpdateBooksControllers {
  async handle(
    request: FastifyRequest<{ Params: { id: string }; Body: UpdateBookBody }>,
    reply: FastifyReply
  ) {
    const { id } = request.params;
    const { categoria, descricao, disponibilidade, titulo, autor, img } =
      request.body
    const booksServices = new UpdateBooksServices();
    const updateAt = new Date()

    try {
      const books = await booksServices.execute({
        id,
        autor,
        categoria,
        descricao,
        disponibilidade,
        titulo,
        img,
        update_at: updateAt
      });
      return reply.send(books);
    } catch (error) {
      return reply.send(error);
    }
  }
}

export { UpdateBooksControllers };
