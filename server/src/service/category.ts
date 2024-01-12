import CategoryModel from "../model/categoryModel";

export const getAllCategory = async () => {
  console.log(CategoryModel.getCategory());

  return CategoryModel.getCategory();
};

export const getCategoryIdByName = async () => {
  return CategoryModel.getCategoryIdByName();
};

export const createCategory = async () => {};

export const updateCategory = async () => {};

export const deleteCategory = async () => {};
