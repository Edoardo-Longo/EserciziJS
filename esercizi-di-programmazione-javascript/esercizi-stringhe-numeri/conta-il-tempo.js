/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

let s = prompt("Inserisci i secondi: ", '');
let m = 0;
let h = 0;
let d = 0;
let y = 0;

while (s >= 60) {
  s = s - 60;
  m = m + 1;
  while (m >= 60) {
    m = m - 60;
    h = h + 1;
    while (h >= 24) {
      h = h - 24;
      d = d + 1;
      while (d >= 365) {
        d = d - 365;
        y = y + 1;
      }
    }
  }
}

alert(`${y}anni ${d} giorni ${h} ore ${m} minuti ${s} secondi`);