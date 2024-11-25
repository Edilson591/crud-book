import { FastifyReply, FastifyRequest } from "fastify";
import { ListBooksServices } from "../services/ListBooksServices";

class ListBooksControllers {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const booksServices = new ListBooksServices();
    try {
      const books = await booksServices.execute();
      reply.send(books);
    } catch (error) {
      return reply.send(error)
    }
  }
}

export { ListBooksControllers };
