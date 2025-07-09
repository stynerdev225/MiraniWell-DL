import "dotenv/config";
import type { Config } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

// Check if we're using Neon (production) or SQLite (development)
const isNeon = process.env.DATABASE_URL.startsWith("postgresql://") || process.env.DATABASE_URL.startsWith("postgres://");

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: isNeon ? "postgresql" : "sqlite",
  dbCredentials: isNeon 
    ? { url: process.env.DATABASE_URL }
    : { url: process.env.DATABASE_URL.replace("file:", "") },
} satisfies Config;