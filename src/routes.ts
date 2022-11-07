import { Router } from "express";

function routes() {
  const router = Router();
  router.get("/me", (req, res) => res.send("me"));
  return router;
}

export { routes };
