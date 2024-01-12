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
            name: "Business",
            type: "Income",
          },
          {
            name: "Extra Income",
            type: "Income",
          },
          {
            name: "Gift",
            type: "Income",
          },
          {
            name: "Insurance Payment",
            type: "Income",
          },
          {
            name: "Salary",
            type: "Income",
          },
          {
            name: "Other",
            type: "Income",
          },
          {
            name: "Car",
            type: "Expense",
          },
          {
            name: "Education",
            type: "Expense",
          },
          {
            name: "Entertainment",
            type: "Expense",
          },
          {
            name: "Food & Drink",
            type: "Expense",
          },
          {
            name: "Healthcare",
            type: "Expense",
          },
          {
            name: "Home",
            type: "Expense",
          },
        ]);
      })
  );
}
