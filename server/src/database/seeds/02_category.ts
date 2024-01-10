import { Knex } from "knex";

const TABLE_NAME = "category";

/**
 * Delete existing entries and seed values for table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  return (
    knex(TABLE_NAME)
      // .del()
      .then(() => {
        return knex(TABLE_NAME).insert([
          {
            name: "Beauty",
          },
          {
            name: "Car",
          },
          {
            name: "Bike",
          },
          {
            name: "Education",
          },
          {
            name: "Entertainment",
          },
          {
            name: "Family",
          },
          {
            name: "Food and Drink",
          },
          {
            name: "Gift",
          },
          {
            name: "Groceries",
          },
          {
            name: "Healthcare",
          },
          {
            name: "Shopping",
          },
        ]);
      })
  );
}
