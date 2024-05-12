import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const weapons = await db.query.weapons.findMany({
    orderBy: (model, { desc }) => desc(model.name),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-items-start bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 py-8 ">
        {weapons.map((weapon) => (
          <h3 key={weapon.id} className="text-2xl font-bold">
            {weapon.name}
          </h3>
        ))}
      </div>
    </main>
  );
}
