import * as categoryService from "../service/category";
import { Request, Response } from "express";

export async function getAllCategory(req: Request, res: Response) {
  const data = await categoryService.getAllCategory();
  console.log(data);

  return res.json({ data });
}

export const createCategory = async () => {};

export const updateCategory = async () => {};

export const deleteCategory = async () => {};
