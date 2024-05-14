// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { doublePrecision, integer, numeric } from "drizzle-orm/pg-core";
import {
  index,
  pgEnum,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

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
    weaponType: weaponTypeEnum("weapon_type").notNull(),
    minimumDamage: integer("minimum_damage").notNull(),
    maximumDamage: integer("maximum_damage").notNull(),
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
