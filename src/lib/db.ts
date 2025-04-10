import { neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;
const connectionString = process.env.DATABASE_URL!;
let cachedDb: ReturnType<typeof drizzle> | null = null;

if (!cachedDb) {
    cachedDb = drizzle(connectionString);
}

export const db = cachedDb;
