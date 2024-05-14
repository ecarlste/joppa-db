import { db } from "~/server/db";
import { DataTable } from "./data_table";
import { columns } from "./columns";

export const dynamic = "force-dynamic";

async function getWeapons() {
  return await db.query.weapons.findMany({
    orderBy: (model, { desc }) => desc(model.name),
  });
}

export default async function WeaponPage() {
  const weapons = await getWeapons();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={weapons} />
    </div>
  );
}
