import Link from "next/link";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
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
      className="flex aspect-square w-full flex-col justify-between bg-cover"
      style={{
        backgroundImage: `url('/img/classes/${convertToLoverRemoveSpaces(
          playerClass.name,
        )}.jpeg')`,
      }}
    >
      <CardHeader className="text-2xl font-bold text-slate-200">
        {playerClass.name}
      </CardHeader>
      <CardContent className="bg-slate-800 bg-opacity-50 pt-4 text-xl text-white">
        {playerClass.summary}
      </CardContent>
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
          <h1 className="py-8 text-3xl font-extrabold tracking-tight">
            Player Classes
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-8">
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
