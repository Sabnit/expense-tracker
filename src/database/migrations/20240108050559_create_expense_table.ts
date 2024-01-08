import { Knex } from "knex";

const TABLE_NAME = "expense";

/**
 * Create table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table
      .uuid("id", { primaryKey: true })
      .defaultTo(knex.raw("uuid_generate_v4()"));

    table.string("title").notNullable();

    table.integer("amount").notNullable();

    table.timestamp("date").notNullable();

    table
      .uuid("created_by")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");

    table
      .uuid("category_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("category");
  });
}

/**
 * Drop table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
