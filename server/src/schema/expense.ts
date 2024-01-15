import Joi from "joi";

export const createExpenseSchema = Joi.object({
  amount: Joi.number().required().messages({
    "number.base": "Amount must be a number",
    "any.required": "Amount is required",
  }),
  date: Joi.date().iso().required().messages({
    "date.base": "Date must be a valid date",
    "date.format": "Date must be in ISO format",
    "any.required": "Date is required",
  }),
  created_by: Joi.date().iso().required().messages({
    "string.base": "Created by must be a string",
    "string.uuid": "Created by must be a valid UUID",
    "any.required": "Created by is required",
  }),
  category_id: Joi.date().iso().required().messages({
    "string.base": "Category ID must be a string",
    "string.uuid": "Category ID must be a valid UUID",
    "any.required": "Category ID is required",
  }),
});
