import { drizzle } from "drizzle-orm/better-sqlite3";
import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import Database from "better-sqlite3";
import "dotenv/config";

// Import schema based on environment
const isProduction = process.env.NODE_ENV === "production" || 
  process.env.DATABASE_URL?.startsWith("postgresql://") || 
  process.env.DATABASE_URL?.startsWith("postgres://");

let schema: any;
let db: any;

if (isProduction) {
  // Production: Use PostgreSQL schema and Neon
  schema = await import("./schema-postgres");
  const sql = neon(process.env.DATABASE_URL!);
  db = drizzleNeon(sql, { schema });
} else {
  // Development: Use SQLite schema and better-sqlite3
  schema = await import("./schema");
  const sqlite = new Database(process.env.DATABASE_URL?.replace("file:", "") || "./local.db");
  db = drizzle(sqlite, { schema });
}

export { db, schema };
export * from "./schema"; // Export original schema for compatibility
