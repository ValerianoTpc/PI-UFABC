const fs = require('fs')
const readline = require('readline');

   
async function borboletas() {
    const fileStream = fs.createReadStream('./inputs/cesar.txt');
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
}

borboletas();
