const path = require('path');
//PATH MODULE
console.log(__filename); //File directory
console.log(path.basename(__filename)); //file name
console.log(path.extname(__filename)); //file extencion
console.log(path.dirname(__filename)); //File directory name
console.log(path.join('/C', 'folder1', 'folder2', '/end')); //Custom directory path join
console.log(path.normalize('/C///folder1/folder2//end///')) //Normalize given path
console.log(path.parse('C:\\Users\\User\\Documents\\Adobe\\PhotoshopPrefsManager-20170107-205930.log')); //Return path elements
