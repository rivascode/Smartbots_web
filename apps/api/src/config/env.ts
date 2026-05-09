import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(4000),
  WEB_ORIGIN: z.string().trim().min(1).default("http://127.0.0.1:5173")
});

const parsed = envSchema.safeParse({
  PORT: process.env.PORT,
  WEB_ORIGIN: process.env.WEB_ORIGIN
});

if (!parsed.success) {
  console.error("Invalid environment configuration", parsed.error.flatten().fieldErrors);
  throw new Error("Invalid environment configuration");
}

export const env = {
  port: parsed.data.PORT,
  webOrigin: parsed.data.WEB_ORIGIN
};

