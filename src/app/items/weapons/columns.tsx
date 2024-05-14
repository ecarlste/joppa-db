"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { type z } from "zod";

import { Button } from "~/components/ui/button";
import { type SelectWeaponSchema } from "~/server/db/schema";

export type Weapon = z.infer<typeof SelectWeaponSchema>;

export const columns: ColumnDef<Weapon>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "weaponType",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Weapon Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorFn: (row) => `${row.minimumDamage}-${row.maximumDamage}`,
    header: "Damage",
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
