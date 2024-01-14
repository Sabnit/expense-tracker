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
            type: "income",
          },
          {
            name: "Extra income",
            type: "income",
          },
          {
            name: "Gift",
            type: "income",
          },
          {
            name: "Insurance Payment",
            type: "income",
          },
          {
            name: "Salary",
            type: "income",
          },
          {
            name: "Other",
            type: "income",
          },
          {
            name: "Car",
            type: "expense",
          },
          {
            name: "Education",
            type: "expense",
          },
          {
            name: "Entertainment",
            type: "expense",
          },
          {
            name: "Food & Drink",
            type: "expense",
          },
          {
            name: "Healthcare",
            type: "expense",
          },
          {
            name: "Home",
            type: "expense",
          },
          {
            name: "Work",
            type: "expense",
          },
          {
            name: "Travel",
            type: "expense",
          },
          {
            name: "Transport",
            type: "expense",
          },
          {
            name: "Shopping",
            type: "expense",
          },
          {
            name: "Family",
            type: "expense",
          },
          {
            name: "Personal",
            type: "expense",
          },
        ]);
      })
  );
}
