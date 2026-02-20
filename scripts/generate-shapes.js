const fs = require('fs');
const path = require('path');

// Read the JSON file
const shapesPath = path.join(__dirname, '../data/shapes.json');
const shapes = JSON.parse(fs.readFileSync(shapesPath, 'utf8'));

// Start building SCSS content
let scssContent = '/* Generated shapes */\n\n';

for (const [name, props] of Object.entries(shapes)) {
  scssContent += `.${name} {\n`;
  for (const [prop, value] of Object.entries(props)) {
    scssContent += `  ${prop}: ${value};\n`;
  }
  scssContent += `}\n\n`;
}

// Write to _shapes.scss
const scssPath = path.join(__dirname, '../styles/_shapes.scss');
fs.writeFileSync(scssPath, scssContent);

console.log('✅ _shapes.scss generated!');