"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { type z } from "zod";

import { type SelectWeaponSchema } from "~/server/db/schema";

export type Weapon = z.infer<typeof SelectWeaponSchema>;

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
