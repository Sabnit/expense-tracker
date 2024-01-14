import { Knex } from "knex";

const TABLE_NAME = "transaction";

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
            title: "Expense 1",
            type: "Expense",
            amount: 100,
            date: "2023-01-01",
            created_by: "888e70b3-0271-4a59-b466-15f4d21e332d",
            category_id: "",
          },
          {
            title: "Expense 2",
            type: "Expense",
            amount: 200,
            date: "2023-02-03",
            created_by: "a5e7e159-afeb-4e80-9cfe-59a82146c446",
            category_id: "",
          },
          {
            title: "Income 1",
            type: "Income",
            amount: 2000,
            date: "2023-02-03",
            created_by: "a5e7e159-afeb-4e80-9cfe-59a82146c446",
            category_id: "",
          },
          {
            title: "Income 2",
            type: "Income",
            amount: 1200,
            date: "2023-02-03",
            created_by: "888e70b3-0271-4a59-b466-15f4d21e332d",
            category_id: "",
          },
        ]);
      })
  );
}
