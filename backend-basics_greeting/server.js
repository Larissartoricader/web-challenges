import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/") {
    response.end("Hello, Larissaaaa");
  }
});
