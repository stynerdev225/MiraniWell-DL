import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

import * as schema from "./schema-sqlite";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}

const sqlite = new Database(process.env.DATABASE_URL.replace("file:", "") || "./local.db");
const db = drizzle(sqlite, { schema });

export default db;