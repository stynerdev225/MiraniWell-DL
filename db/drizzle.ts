import { neon } from "@neondatabase/serverless";
import Database from "better-sqlite3";
import { drizzle as drizzleSqlite } from "drizzle-orm/better-sqlite3";
import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const isProduction = process.env.VERCEL_ENV === "production" || 
  process.env.NODE_ENV === "production" ||
  (process.env.DATABASE_URL && process.env.DATABASE_URL.includes("postgresql"));

let db: ReturnType<typeof drizzleNeon> | ReturnType<typeof drizzleSqlite>;

if (isProduction && process.env.DATABASE_URL) {
  const sql = neon(process.env.DATABASE_URL);
  db = drizzleNeon(sql, { schema });
} else {
  const sqlite = new Database("./local.db");
  sqlite.pragma('journal_mode = WAL');
  sqlite.pragma('synchronous = NORMAL');
  sqlite.pragma('cache_size = 1000');
  sqlite.pragma('temp_store = memory');
  sqlite.pragma('mmap_size = 268435456');
  db = drizzleSqlite(sqlite, { schema });
}

export default db;