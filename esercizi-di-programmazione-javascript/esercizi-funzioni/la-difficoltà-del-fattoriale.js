/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

  Esempio:
    Input: n = 5
    Output: 120

  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120

  http://www.imparareaprogrammare.it
*/

let n = 5;
let res = n;

for (let i = 1; i < n; i++) {
  res = res * i;
}

console.log(res);

/* let res = 1;

for (let i = n; i >= 1; i--) {
  res = res * i;
}

console.log(res); */