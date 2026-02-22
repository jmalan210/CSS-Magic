import GradientsList from "./GradientsList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const gradientsList = new GradientsList(".gradients-container");
gradientsList.loadFromJSON("./data/gradients.json");
    
// const sidebar = document.querySelector(".library-sidebar");
// const tab = document.querySelector(".library-tab");

// tab.addEventListener("click", () => {
//     const isOpen = sidebar.classList.toggle('open');
//     tab.setAttribute("aria-expanded", isOpen);
// });