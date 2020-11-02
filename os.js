//OS MODULE
const os = require('os')

console.log(os.cpus()); //CPU Threads info
console.log(os.hostname()); //Device name
console.log(os.freemem()); //Free Ram
console.log(os.tmpdir());//System's default directory for temporary files
console.log(os.version());//OS Version