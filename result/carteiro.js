const fs = require('fs')
const readline = require('readline');

   
async function carteiro() {
    const fileStream = fs.createReadStream('./inputs/cesar.txt');
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
}

carteiro();
