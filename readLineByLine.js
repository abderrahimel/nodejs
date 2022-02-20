const readline = require('readline');
const fs = require('fs');

// To read files line-by-line, we can use the .createInterface() method from the readline core module.
const myInterface = readline.createInterface({
   input: fs.createReadStream('shoppingList.txt')
})

const printData = (data) =>{
     console.log("Item: "+[data])
}

myInterface.on('line', printData)