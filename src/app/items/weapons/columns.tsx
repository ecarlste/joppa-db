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
    header: "Min Damage",
    accessorKey: "minimumDamage",
  },
  {
    header: "Max Damage",
    accessorKey: "maximumDamage",
  },
  {
    header: "Delay",
    accessorKey: "delay",
  },
];
