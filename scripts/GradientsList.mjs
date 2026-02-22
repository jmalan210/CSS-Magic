import { camelToTitle } from "./utils.mjs";


export default class GradientsList {
    constructor(container) {
        this.container = document.querySelector(container);
    
    }

    addGradient(name, cssProps) {
        const li = document.createElement('li');
        li.classList.add('gradient-card');

        
        const title = document.createElement('h4');
        title.classList.add('gradient-card-title');
        title.innerText = camelToTitle(name);

        const gradientElement = document.createElement('div');
        gradientElement.classList.add('gradient', name);
        gradientElement.textContent = " "; //prevents collapse
        
        
   
        

        Object.entries(cssProps).forEach(([prop, value]) => {
            gradientElement.style[prop] = value;
        });
     
       
        gradientElement.style.width = "300px";
        gradientElement.style.height = "300px";
        gradientElement.style.display = "block";
        // gradientElement.style.border = "2px solid black";
        gradientElement.style.boxSizing = "border-box";
        gradientElement.style.flexShrink = "0";
         
        

        const codeElement = document.createElement('pre');
        codeElement.classList.add('gradient-code');
        codeElement.textContent = Object.entries(cssProps)
            .map(([prop, value]) => `${prop}: ${value};`)
            .join("\n");
        
        li.appendChild(title);
        li.appendChild(gradientElement);
        li.appendChild(codeElement);
        this.container.appendChild(li);
    }

    loadFromJSON(jsonPath) {
        fetch(jsonPath)
            .then(res => {
                if (!res.ok) throw new Error("Gradients JSON is empty");
                return res.json();
               
            })
            .then(gradients => {
                Object.entries(gradients).forEach(([name, cssProps]) => {
                    this.addGradient(name, cssProps);
                });
            })
            .catch(err => console.error("failed to locate shapes:", err));
    }
}