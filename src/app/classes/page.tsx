import Link from "next/link";
import { Card, CardHeader } from "~/components/ui/card";
import { db } from "~/server/db";
import { playerClass, type PlayerClass } from "~/server/db/schema";

async function fetchPlayerClasses() {
  const result = await db
    .select({
      id: playerClass.id,
      name: playerClass.name,
      summary: playerClass.summary,
    })
    .from(playerClass);

  return result;
}

export function PlayerClassSummaryCard({
  playerClass,
}: {
  playerClass: PlayerClass;
}) {
  return (
    <Card>
      <CardHeader>{playerClass.name}</CardHeader>
    </Card>
  );
}

export default async function PlayerClassesPage() {
  const classes = await fetchPlayerClasses();

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="scroll-m-20 py-8 text-xl font-extrabold tracking-tight">
        Classes
      </h1>
      <div className="flex flex-col items-center">
        {classes.map((playerClass) => (
          <Link key={playerClass.id} href={`/classes/${playerClass.id}`}>
            <PlayerClassSummaryCard playerClass={playerClass} />
          </Link>
        ))}
      </div>
    </div>
  );
}
