import * as categoryService from "../service/category";
import { Request, Response } from "express";

export async function getAllCategory(req: Request, res: Response) {
  const { query } = req;

  const data = await categoryService.getAllCategory(query);

  return res.json({ data });
}
