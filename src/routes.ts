import { FastifyInstance, FastifyPluginOptions,FastifyRequest, FastifyReply } from "fastify";
import { CreateBookControllers } from "./controllers/CreateBookControllers";
import { ListBooksControllers } from "./controllers/ListBooksControllers";
import { UpdateBooksControllers } from "./controllers/UpdateBooksControllers";
import { Books, DeleteUser } from "./interface/BooksInterface";
import { DeleteBooksControllers } from "./controllers/DeleteBooksControllers";


export async function routes(fastify: FastifyInstance, optinons: FastifyPluginOptions) {

    fastify.get("/books",async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListBooksControllers().handle(request,reply)
    })
    fastify.get("/",async (request: FastifyRequest, reply: FastifyReply) => {
        return reply.code(200).send("tudo ok") 
    })
    fastify.post("/book",async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateBookControllers().handle(request,reply)
    })
    fastify.put("/:id",async (request: FastifyRequest<{ Params: { id: string }; Body: Books }>, reply: FastifyReply) => {
        return new UpdateBooksControllers().handle(request,reply)
    })
    fastify.delete("/book",async (request: FastifyRequest<{Querystring: DeleteUser}>, reply: FastifyReply) => {
        return new DeleteBooksControllers().handle(request,reply)
    })
    
}