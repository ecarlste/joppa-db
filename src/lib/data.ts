import { db } from "~/server/db";
import { playerClass } from "~/server/db/schema";

export async function fetchPlayerClasses() {
  const result = await db
    .select({
      id: playerClass.id,
      name: playerClass.name,
      summary: playerClass.summary,
    })
    .from(playerClass);

  return result;
}
