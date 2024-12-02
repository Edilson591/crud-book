import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteUser } from "../interface/BooksInterface";
import { DeleteBooksServices } from "../services/DeleteBooksServices";

class DeleteBooksControllers {
  async handle(
    request: FastifyRequest<{ Querystring: DeleteUser }>,
    reply: FastifyReply
  ) {
    const { id } = request.query;
    const booksServices = new DeleteBooksServices();

    try {
      const books = await booksServices.execute({ id });
      return reply.status(200).send(books);
    } catch (error) {
      return reply.status(500).send({ error: "Failed to delete book." });
    }
  }
}

export { DeleteBooksControllers };
