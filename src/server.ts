import express from "express";
import morgan from "morgan";
import { resolve } from "path";
import { routes } from "./routes";

function server() {
  const server = express();
  server.use(morgan("dev"));
  server.use("/", express.static(resolve("public")));
  server.use("/api", routes());

  return server;
}

export { server };
