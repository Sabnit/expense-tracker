import { ICategory } from "../interface/category";
import CategoryModel from "../model/categoryModel";

export const getAllCategory = async (query: ICategory) => {
  return CategoryModel.getCategory(query);
};
