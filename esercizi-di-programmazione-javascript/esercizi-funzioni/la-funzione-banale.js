/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.

  Esempi:
    Input: n = 2, m = 3
    Output: FALSE

    Input: n = 2, m = '2'
    Output: FALSE

    Input: n = 2, m = 2
    Output: TRUE

    
  http://www.imparareaprogrammare.it
*/

const prompt = require('prompt-sync')();

let a = prompt('Inserire il primo numero: ');
let b = prompt('Inserire il secondo numero: ');

function equal(a, b) {
  if (a === b) {
    console.log('TRUE');
  } else {
    console.log('FALSE');
  }
}

equal(a, b);