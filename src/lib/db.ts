import { neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/db/schema";

neonConfig.fetchConnectionCache = true;
const connectionString = process.env.DATABASE_URL!;
let cachedDb: ReturnType<typeof drizzle> | null = null;

if (!cachedDb) {
    cachedDb = drizzle(connectionString, { schema });
}

export const db = cachedDb;
