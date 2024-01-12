import { navItems } from "../../dom/expenseApp/navItems";

// if (navItems.expense?.classList === "active-list") {
//   console.log("expense is active");
// }

navItems.expense?.addEventListener("click", () => {
  console.log(navItems.expense?.classList);
});
