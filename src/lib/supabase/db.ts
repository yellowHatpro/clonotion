import postgres from "postgres";
import * as schema from "../../../migrations/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
if (!process.env.DATABASE_URL) {
  console.log("No db URL");
}
const migrationClient = postgres(process.env.DATABASE_URL as string, {
  max: 1,
});
const db = drizzle(migrationClient, { schema });
const migrateDB = async () => {
  try {
    console.log("Migrating Client");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("Migration Successful");
  } catch (e) {
    console.log("Error migrating client");
  }
};
migrateDB();
export default db;
