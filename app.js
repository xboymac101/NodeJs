const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname);

// List of input files
const inputFiles = [
  'input1.txt',
  'input2.txt',
  'input3.txt',
  'input4.txt',
  'input5.txt',
  'input6.txt',
  'input7.txt',
  'input8.txt',
  'input9.txt',
  'input10.txt'
];


const fileLines = [];

for (let i = 0; i < inputFiles.length; i++) {
  const filePath = path.join(dirPath, inputFiles[i]);
  const content = fs.readFileSync(filePath, 'utf-8');
  fileLines[i] = content.split('\r\n').filter(line => line.trim() !== ''); // Remove empty lines
}


const outputLines = [];


for (let j = 0; j < inputFiles.length; j++) {
  const linesToTake = j + 1;
  let count = 0;

  for (let i = 0; i < fileLines[j].length; i++) {
    if (count < linesToTake) {
      outputLines.push(fileLines[j][i]);
      count++;
    } else {
      break;
    }
  }
}

// Join all output lines and write them to the output file
const textOut = outputLines.join('\n');
fs.writeFileSync(`${dirPath}/output.txt`, textOut);

console.log('The lines have been written to output.txt');
