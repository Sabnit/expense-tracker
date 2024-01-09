import { Knex } from "knex";

const TABLE_NAME = "users";

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
            fname: "User ",
            lname: "1",
            email: "user1@test.com",
            password:
              "$2b$10$xm48I4u9/4UCaTCfQY1qkubMU14wEXF.cUsCd7sIUhYeBKb27gvS2",
          },
          {
            fname: "User ",
            lname: "2",
            email: "user2@test.com",
            password:
              "$2b$10$xm48I4u9/4UCaTCfQY1qkubMU14wEXF.cUsCd7sIUhYeBKb27gvS2",
          },
        ]);
      })
  );
}
