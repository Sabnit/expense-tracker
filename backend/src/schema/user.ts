import Joi from "joi";

export const createUserSchema = Joi.object({
  fname: Joi.string().required().max(255).messages({
    "string.base": "First name must be a string",
    "string.empty": "First name cannot be empty",
    "any.required": "First name is required",
    "string.max": "First name must be at most 255 characters",
  }),
  lname: Joi.string().required().max(255).messages({
    "string.base": "Last name must be a string",
    "string.empty": "Last name cannot be empty",
    "any.required": "Last name is required",
    "string.max": "Last name must be at most 255 characters",
  }),

  email: Joi.string().email().required().max(255).messages({
    "string.base": "Email must be a string",
    "string.email": "Email must be a valid email address",
    "any.required": "Email is required",
    "string.empty": "Email cannot be empty",
    "string.max": "Email must be at most 255 characters",
  }),

  password: Joi.string().required().max(255).messages({
    "string.base": "Password must be a string",
    "string.empty": "Password cannot be empty",
    "any.required": "Password is required",
    "string.min": "Password must be at least 8 characters",
    "string.max": "Password must be at most 255 characters",
  }),
});
