export const dynamic = "force-dynamic";

const mockWeaponNames = ["Weapon 1", "Weapon 2", "Weapon 3"];

const mockWeapons = mockWeaponNames.map((name, index) => ({
  id: index + 1,
  name: name,
}));

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-items-start bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 py-8 ">
        {mockWeapons.map((weapon) => (
          <h3 key={weapon.id} className="text-2xl font-bold">
            {weapon.name}
          </h3>
        ))}
      </div>
    </main>
  );
}
