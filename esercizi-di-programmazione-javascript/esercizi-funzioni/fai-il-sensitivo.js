/*
  Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B

  Variante:
  Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti:
  vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.

  Consigli per la variante:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Se non ricordi come richiedere all'utente un valore in input, rivedi l'esercizio sugli array "Azzecca e azzera"

  http://www.imparareaprogrammare.it
*/
const prompt = require('prompt-sync')();

let a = prompt('Inserire il primo numero: ');
let b = prompt('Inserire il secondo numero: ');
let n = prompt('Inserire il numero comparatore: ');

function compare(a, b, n) {

  let diffa = n - a;
  let diffb = n - b;

  if (diffa == diffb || diffa == (diffb * -1) || diffb == (diffa * -1)) {
    console.log('Sono equidistanti da N');
  } else if (diffa < diffb || diffa < (diffb * -1) || diffb < (diffa * -1)) {
    console.log('A è più vicino ad N rispetto a B');
  } else if (diffa > diffb || diffa > (diffb * -1) || diffb > (diffa * -1)) {
    console.log('B è più vicino ad N rispetto a A');
  }

}

compare(a, b, n);