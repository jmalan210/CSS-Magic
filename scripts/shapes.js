import ShapesList from "./ShapesList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const shapesList = new ShapesList(".shapes-container");
shapesList.loadFromJSON("./data/shapes.json")
    
const sidebar = document.querySelector(".library-sidebar");
const tab = document.querySelector(".library-tab");

tab.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle('open');
    tab.setAttribute("aria-expanded", isOpen);
});