import fastify from "fastify";
import { routes } from "./routes";
import fastifyCors from "@fastify/cors";


const app = fastify({
  logger: true,
  ignoreTrailingSlash: true,
  caseSensitive: false,
  connectionTimeout: 30000,
});

const start = async () => {
  app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
  });


  
  await app.register(fastifyCors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  });
  await app.register(routes);

  try {
    await app.listen(
      {
        port: process.env.PORT ? Number(process.env.PORT) : 1000,
        host: "0.0.0.0",
      },
      (err, address) => {
        if(err){
          console.error(err);
          process.exit(1)
        }else {
          console.log(`Servidor escutando em ${address}`)
        }
      }
    );
  } catch (error) {
    process.exit(1);
  }
};

start();
