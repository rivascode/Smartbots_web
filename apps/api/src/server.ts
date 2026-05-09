import cors from "cors";
import express from "express";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { contactRouter } from "./routes/contact.js";
import { healthRouter } from "./routes/health.js";

const app = express();

app.use(
  cors({
    origin: env.webOrigin,
    credentials: true
  })
);
app.use(express.json({ limit: "1mb" }));

app.use("/api/health", healthRouter);
app.use("/api/contact", contactRouter);
app.use(errorHandler);

app.listen(env.port, () => {
  console.info(`SMARTBOTS API listening on http://127.0.0.1:${env.port}`);
});
