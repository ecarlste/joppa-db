"use client";

import { type ColumnDef } from "@tanstack/react-table";

export type Weapon = {
  id: number;
  name: string;
  weaponType: string;
  minimumDamage: number;
  maximumDamage: number;
  delay: number;
};

export const columns: ColumnDef<Weapon>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Type",
    accessorKey: "weaponType",
  },
  {
    header: "Damage",
    accessorFn: (row) => `${row.minimumDamage}-${row.maximumDamage}`,
  },
  {
    header: "DPS",
    accessorFn: (row) => {
      const { minimumDamage, maximumDamage, delay } = row;
      const averageDamage = (minimumDamage + maximumDamage) / 2;
      return (averageDamage / delay).toFixed(2);
    },
  },
];
