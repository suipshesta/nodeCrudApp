// import { mkdir } from 'node:fs/promises';

// try {
// const projectFolder = new URL('./temp/', import.meta.url);
// const createDir = await mkdir(projectFolder, { recursive: true });

// console.log(`created ${createDir}`);
// } catch (err) {
// console.error(err.message);
// }


const fs = require('fs');
const path = require('path');

// create folder
let filePath = path.join(__dirname, '/temp');
let fileName = path.join(filePath, '/hello.txt'); // full path
let option = {};
let folderCreateCallback = err => {
    if (err) 
        throw err;
    
    console.log("folder created successfully...");
}


let fileAppendCallback = err => {
    if (err) 
        throw err;
    
    console.log("file appended successfully...");
}

// create folder
fs.mkdir(filePath, option, folderCreateCallback);

// write file
fs.writeFile(fileName, 'some text here', err => {
    if (err) 
        throw err;
    
    console.log("file created successfully...");
    // append file
    fs.appendFile(fileName, ' new text here', fileAppendCallback);

});

// read file
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) 
        throw err;
    
    console.log("content from file: "+data);
});

