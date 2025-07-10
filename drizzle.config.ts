import "dotenv/config";
import type { Config } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const config: Config = {
  schema: "./db/schema-sqlite.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};

export default config;