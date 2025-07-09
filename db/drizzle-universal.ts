import { neon } from "@neondatabase/serverless";
import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";

// Check if we're in production
const isProduction = process.env.VERCEL_ENV === "production" || 
  process.env.NODE_ENV === "production" ||
  (process.env.DATABASE_URL && process.env.DATABASE_URL.includes("postgresql"));

async function getDatabase() {
  if (isProduction && process.env.DATABASE_URL) {
    // Production: Use Neon PostgreSQL
    try {
      const schema = await import("./schema-postgres");
      const sql = neon(process.env.DATABASE_URL);
      const db = drizzleNeon(sql, { schema });
      return { db, schema };
    } catch (error) {
      console.warn("PostgreSQL schema not found, falling back to SQLite schema");
      const schema = await import("./schema");
      const sql = neon(process.env.DATABASE_URL);
      const db = drizzleNeon(sql, { schema });
      return { db, schema };
    }
  } else {
    // Development: Use SQLite
    const Database = (await import("better-sqlite3")).default;
    const { drizzle } = await import("drizzle-orm/better-sqlite3");
    const schema = await import("./schema");
    const sqlite = new Database("./local.db");
    const db = drizzle(sqlite, { schema });
    return { db, schema };
  }
}

// Export the database promise
export const dbPromise = getDatabase();
export * from "./schema";