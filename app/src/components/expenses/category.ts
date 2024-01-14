import domContainer from "../../dom/expenseApp/container";

export const createList = (list: any) => {
  list.forEach((category: string) => {
    const option = document.createElement("option");
    option.value = category;
    option.text = category;
    domContainer.categorySelect.add(option);
  });
};
