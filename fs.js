//FS MODULE
const fs = require('fs')

const newData = 'New file content';
const updateData = ' and updated file content'
const defaultData = 'Default data'

function reset() {
    fs.writeFile('text.txt', defaultData, (e) =>{
        if (e) throw e
    })
}

//File read
function readFile () {
    fs.readFile('text.txt', 'utf8', function (e, data) {
        if (e) return console.log(e)
        console.log(data)
    })
}


//File write
function writeFile () {
    fs.writeFile('text.txt', newData, (e)=>{
        if (e) throw e
        readFile()
    })
}

//File update
function updateFile() {
    fs.appendFile('text.txt', updateData, (e) => {
        if (e) throw e
        readFile()
    })

}

readFile()
writeFile()
updateFile()
