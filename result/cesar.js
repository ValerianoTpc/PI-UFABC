const fs = require('fs')
const readline = require('readline');

   
async function Leitura() {
    const fileStream = fs.createReadStream('../inputs/cesar.txt');
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
      let num;
      for(let i =0;i<res.length;i++){
        if(res.charCodeAt(i) >= 65 && res.charCodeAt(i) <= 90){
          num = (res.charCodeAt(i) + letras) % 26;
        }
      }
      console.log(num);
    }

}
Leitura();

