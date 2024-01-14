import buttonEventListeners from "./button";
import iconEventListeners from "./icon";
import navbarEventListeners from "./navbar";

export const initializeEventListeners = () => {
  navbarEventListeners();
  iconEventListeners();
  buttonEventListeners();
};
