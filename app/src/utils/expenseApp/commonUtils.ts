export const addClassList = (element: HTMLElement, className: string) => {
  element.classList.add(`${className}`);
};

export const removeClassList = (element: HTMLElement, className: string) => {
  element.classList.remove(`${className}`);
};

export const hideElement = (element: HTMLElement) => {
  element.style.display = "none";
};

export const showElement = (element: HTMLElement) => {
  element.style.display = "block";
};

export const clearInput = (element: HTMLInputElement) => {
  element.value = "";
};
