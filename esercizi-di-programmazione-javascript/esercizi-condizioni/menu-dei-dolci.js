/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/

let a = '1 Tiramisù';
let b = '2 Torta della nonna';
let c = '3 Cheesecake alla nutella';
let d = '4 Macedonia';
let scelta = prompt(`Scegli un dolce tra ${a}, ${b}, ${c}, ${d}`)

switch (scelta) {
  case '1':
    alert('Tiramisù');
    break;
  case '2':
    alert('Torta della nonna');
    break;
  case '3':
    alert('Cheesecake alla nutella');
    break;
  case '4':
    alert('Macedonia');
    break;
  default:
    alert('Dolce non disponibile');
    break;
}