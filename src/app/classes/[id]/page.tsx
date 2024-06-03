import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { db } from "~/server/db";
import { characterClass } from "~/server/db/schema";

async function fetchCharacterClass(id: number) {
  const result = await db
    .select()
    .from(characterClass)
    .where(eq(characterClass.id, id));

  return result[0];
}

export default async function ClassDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const idNumber = Number(params.id);
  const characterClass = await fetchCharacterClass(idNumber);

  if (!characterClass) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="scroll-m-20 py-8 text-xl font-extrabold tracking-tight">
        {characterClass?.name}
      </h1>
    </div>
  );
}
