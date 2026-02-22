

export default class ShapesList {

    constructor(container) {
        this.container = document.querySelector(container);
    }

    addShape(name, cssProps) {
        const li = document.createElement('li');
        li.classList.add('shape-card');

        const capitalize = name => name[0].toUpperCase() + name.slice(1);
        const title = document.createElement('h4');
        title.classList.add('shape-card-title');
        title.innerText = capitalize(name);

        const shapeElement = document.createElement('div');
        shapeElement.classList.add('shape', name);

        Object.entries(cssProps).forEach(([prop, value]) => {
           
            shapeElement.style[prop] = value;
        });

        const codeElement = document.createElement('pre');
        codeElement.classList.add("shape-code");
        codeElement.textContent = Object.entries(cssProps)
            .map(([prop, value ]) => `${prop}: ${value};`)
            .join("\n");
        
        li.appendChild(title);
        li.appendChild(shapeElement);
        li.appendChild(codeElement);
        this.container.appendChild(li);
    }

    loadFromJSON(jsonPath) {
        fetch(jsonPath)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                return res.json();
            })
            .then(shapes => {
                if (!shapes) throw new Error("Shapes JSON is empty");
                Object.entries(shapes).forEach(([name, cssProps]) => {
                    this.addShape(name, cssProps);
                });
            })
            .catch(err => console.error("failed to locad shapes:", err));
    }
}