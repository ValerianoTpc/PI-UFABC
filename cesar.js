const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digíte um número', (answer) => {
  for(let i=0;i<answer;i++){
    console.log(answer*i);
  }
  rl.close();
});