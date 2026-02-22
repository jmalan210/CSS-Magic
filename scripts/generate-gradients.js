const fs = require('fs');
const path = require('path');

const gradientsPath = path.join(__dirname, '../data/gradients.json');
const gradients = JSON.parse(fs.readFileSync(gradientsPath, 'utf8'));

let scssContent = '/* Generated gradients */\n\n';

for (const [name, props] of Object.entries(gradients)) {
    scssContent += `.${name} {\n`;
    for (const [prop, value] of Object.entries(props)) {
        scssContent += ` ${prop}: ${value};\n`
    }

    scssContent += `}\n\n`;
}

const scssPath = path.join(__dirname, '../styles/_gradients.scss');
fs.writeFileSync(scssPath, scssContent);

console.log('✅ _gradients.scss generated!');
