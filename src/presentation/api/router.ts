import { Router } from "express";

// Init
export const apiRouter = Router();

// Add api routes
apiRouter.get("/health-check", (_, res) => {
  res.json({ message: "OK" });
});
