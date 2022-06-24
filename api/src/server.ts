import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import path from "path";
import { config } from "./config";
import { resolvers } from "./resolvers";
import { schema } from "./schema";
import { Cache } from "./utils/Cache";

const cache = new Cache({
  filename: path.join(__dirname, "..", ".cache", "cache.json"),
});

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    csrfPrevention: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await cache.init();
  await server.start();
  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: config.PORT }, resolve)
  );
  console.log(`The server has been started on http://localhost:${config.PORT}`);
  console.log(`Apollo client is available at http://localhost:${config.PORT}/graphql`);
}

startApolloServer();
