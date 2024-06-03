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
    <Card
      className="aspect-square w-full bg-cover"
      style={{
        backgroundImage: `url('/img/classes/${convertToLoverRemoveSpaces(
          playerClass.name,
        )}.jpeg')`,
      }}
    >
      <CardHeader>{playerClass.name}</CardHeader>
    </Card>
  );
}

function convertToLoverRemoveSpaces(str: string) {
  return str.toLowerCase().replace(/\s/g, "");
}

export default async function PlayerClassesPage() {
  const classes = await fetchPlayerClasses();

  return (
    <div className="flex w-full">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col">
        <div className="flex justify-center">
          <h1 className="py-8 text-xl font-extrabold tracking-tight">
            Classes
          </h1>
        </div>
        <div className="grid grid-cols-3">
          {classes.map((playerClass) => (
            <Link key={playerClass.id} href={`/classes/${playerClass.id}`}>
              <PlayerClassSummaryCard playerClass={playerClass} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
