const fs = require('fs')
const readline = require('readline');

   
async function Leitura() {
    const fileStream = fs.createReadStream('./inputs/cesar.txt');
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
}

Leitura();
