// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  doublePrecision,
  index,
  integer,
  pgEnum,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { type z } from "zod";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */

export const weaponTypeEnum = pgEnum("weapon_type", [
  "club",
  "mace",
  "stave",
  "great_hammer",
  "great_mace",
  "axe",
  "sword",
  "great_axe",
  "great_blade",
  "great_sword",
  "dagger",
  "short_spear",
  "long_spear",
  "halberd",
]);

export const createTable = pgTableCreator((name) => `joppa-db_${name}`);

export const weapons = createTable(
  "weapon",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    type: weaponTypeEnum("type").notNull(),
    damage: integer("damage").notNull(),
    delay: doublePrecision("delay").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);

export const playerClassNameEnum = pgEnum("class_name", [
  "Cleric",
  "Dire Lord",
  "Druid",
  "Enchanter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Shaman",
  "Summoner",
  "Warrior",
  "Wizard",
]);

export const playerClass = createTable("class", {
  id: serial("id").primaryKey(),
  name: playerClassNameEnum("name").notNull().unique(),
  summary: varchar("summary", { length: 256 }).notNull(),
});

export const playerClassAbilities = createTable("class_ability", {
  id: serial("id").primaryKey(),
  classId: integer("class_id").references(() => playerClass.id),
  name: varchar("name", { length: 256 }).notNull(),
});

export const selectWeaponSchema = createSelectSchema(weapons);
export type Weapon = z.infer<typeof selectWeaponSchema>;

export const selectPlayerClassSchema = createSelectSchema(playerClass);
export type PlayerClass = z.infer<typeof selectPlayerClassSchema>;
