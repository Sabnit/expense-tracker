import { Knex } from "knex";

const TABLE_NAME = "expense";

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
            amount: 100,
            date: "2023-01-01",
            created_by: "1551f645-09a2-4882-83ed-11df9ef0ce55",
            category_id: "0e14c141-2ffe-4431-8f9c-38770ac32d44",
          },
          {
            title: "Expense 2",
            amount: 200,
            date: "2023-02-03",
            created_by: "c186e7c7-112a-4013-a568-aeb91d7e544f",
            category_id: "4fa02936-65e5-492d-aea3-b559167c1ce7",
          },
        ]);
      })
  );
}
