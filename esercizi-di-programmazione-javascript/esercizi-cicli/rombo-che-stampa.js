/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/
const prompt = require('prompt-sync')();


let num = 0;
let str = 'x';

while (num % 2 == 0) {
  num = prompt('Inserire un numero dispari: ');
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    console.log(str);
  }
}