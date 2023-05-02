const path=require('path');

// about the module
//console.log(path);
//directory path
console.log(__dirname);
//file path
console.log("full path: "+__filename);

console.log("folder name: "+path.basename(__dirname));

console.log("file name: "+ path.basename(__filename));

console.log("extension of file: "+path.extname(__filename));
