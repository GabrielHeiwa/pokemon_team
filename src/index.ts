import { resolve } from "path";
import { config } from "dotenv";
config({
  path: resolve(__dirname, "..", ".env"),
});

import { server } from "./server";

const PORT = process.env.PORT || 4111;

function bootstrap() {
  server().listen(PORT, () =>
    console.log(`[bootstrap]> Server running in http://localhost:${PORT}`)
  );
}

bootstrap();
