import Link from "next/link";
import { db } from "~/server/db";
import { characterClass } from "~/server/db/schema";

async function fetchCharacterClasses() {
  const result = await db
    .select({ id: characterClass.id, name: characterClass.name })
    .from(characterClass);

  return result;
}

export default async function ClassesPage() {
  const classes = await fetchCharacterClasses();

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="scroll-m-20 py-8 text-xl font-extrabold tracking-tight">
        Classes
      </h1>
      <div className="flex flex-col items-center">
        {classes.map((characterClass) => (
          <Link key={characterClass.id} href={`/classes/${characterClass.id}`}>
            {characterClass.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
