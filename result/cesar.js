const fs = require('fs')
const readline = require('readline');

   
async function Cesar() {
    const fileStream = fs.createReadStream('../inputs/cesar.txt');
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    const texto = [];
    let letras = 0;

    for await (const line of rl) {
        if(!isNaN(line)=== true){
          letras = line;
        }else{
          texto.push(line);
        }
    }

    for(const res of texto){
      let num = 0;
      let cesar = "";
      for(let i =0;i<res.length;i++){
        if(res.charCodeAt(i) >= 65 && res.charCodeAt(i) <= 90){
          num = (res.charCodeAt(i) - 65 + Number(letras))% 26;
          cesar = cesar +  String.fromCharCode(num+65);
        }else if(res.charCodeAt(i) >= 97 && res.charCodeAt(i) <= 122){
          num = (res.charCodeAt(i) - 97 + Number(letras))% 26;
          cesar = cesar +  String.fromCharCode(num+97);
        }
        else{
          cesar = cesar + res.charAt(i);
        }
      }
      console.log(cesar);
    }

}

Cesar();

