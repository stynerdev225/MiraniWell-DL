import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

import * as schema from "./schema-sqlite";

const sqlite = new Database("./local.db");
const db = drizzle(sqlite, { schema });

export default db;
export * from "./schema-sqlite";
