import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

import * as schema from "./schema";

const sqlite = new Database(process.env.DATABASE_URL?.replace("file:", "") || "./local.db", {
  // Enable WAL mode for better performance
  verbose: process.env.NODE_ENV === "development" ? console.log : undefined,
});

// Enable WAL mode and optimize for performance
sqlite.pragma('journal_mode = WAL');
sqlite.pragma('synchronous = NORMAL');
sqlite.pragma('cache_size = 1000');
sqlite.pragma('temp_store = memory');
sqlite.pragma('mmap_size = 268435456'); // 256MB

const db = drizzle(sqlite, { schema });

export default db;
