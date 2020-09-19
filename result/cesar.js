const fs = require('fs')
const readline = require('readline');

   
async function Leitura() {
    const fileStream = fs.createReadStream('./inputs/cesar.txt');
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    const texto = [];
    let letras;

    for await (const line of rl) {
        if(!isNaN(line)=== true){
          letras = line;
        }else{
          texto.push(line);
        }
    }

    for(const res of texto){
      console.log(res)
    }
}
Leitura();

