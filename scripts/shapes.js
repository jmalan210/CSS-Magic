import ShapesList from "./ShapesList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const shapesList = new ShapesList(".shapes-container");
shapesList.loadFromJSON("./data/shapes.json")
    
