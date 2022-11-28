import morgan from "morgan";
import helmet from "helmet";
import StatusCodes from "http-status-codes";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import "express-async-errors";

import { apiRouter } from "./presentation/api/router";
import logger from "jet-logger";
import { CustomError } from "@shared/errors";
import { envVars } from "@shared/envVars";

// **** Init express **** //

const app = express();

// **** Set basic express settings **** //

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Show routes called in console during development
if (envVars.nodeEnv === "development") {
  app.use(morgan("dev"));
}

// Security
if (envVars.nodeEnv === "production") {
  app.use(helmet());
}

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// **** Add API routes **** //

// Add APIs
app.use("/api/v1", apiRouter);

// Error handling
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error | CustomError, req: Request, res: Response, _: NextFunction) => {
    logger.err(err, true);
    const status =
      err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST;
    return res.status(status).json({
      error: err.message,
    });
  }
);

export default app;
