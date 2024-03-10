
/*1
***********************************************
*/

/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; /*i > 5*/ i < 5 ; i++) {
    console.log(i);
}

/*
1. il codice stampa un indice per un ciclo che va da 0 a 4
2. nessun errore di sintassi
3. la condizione data è impossibile perchè i = 0 contrasta con i > 5
*/


// ESERCIZIO 2
function addIfEven(num) {
    if /*(num % 2  =  0)*/ (num % 2 == 0 ) {
        return num + 5;
    }
    /*return num;*/
}
/*
1. il codice restituisce la somma di un numero dato + 5 se il numero è pari
2. la sintassi è sbagliata perchè un solo `=` è operatore di assegnamento
3.  il secondo return è ridondante 
*/

// ESERCIZIO 3
function loopToFive() {
    for /*(let i = 0, i < 5, i++)*/(let i = 0; i < 5; i++)  {
        console.log(i);
    }
}
/*
1. il codice stampa un indice che va da 0 a 4
2. va messo ; dopo le operazioni e non ,
3. logica corretta
*/

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function displayEvenNumbers(array) {
    let evenNumbers = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] % 2 == 0) {
            evenNumbers.push(array[i]);
        }
    }
    console.log(evenNumbers);
    return evenNumbers;
}
displayEvenNumbers(numbers); // dovrebbe restituire [2,4,6,8]

/*
1. il codice ritorna i numeri pari di un array dato
2 e 3. ho spostato numbers al di fuori della funzione altrimenti la funzione è sostanzialmente inutile perchè potrebbe agire solo su numbers,
  alla funzione ho inserito il parametro da ritornare
  a riga 59 non va `;` dopo i++, poi a riga 60 serve il `==` e va chiamato l'indice di numbers con [i], 
 il push va fatto all'elemento dell'array e non all'indice e infine ho spostato il return fuori dal for come ultima operazione della funzione
*/


/*2
***********************************************
*/
/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
let myAge = prompt("Inserire età");
function checkAge() {
    
   /* const */ let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    console.log(message); /*aggiunto*/
}
checkAge();

/*
1. il codice controlla l'età datagli e stampa un emessaggio a seconda del risultato
2. 
3. la costante myAge va messa fuori dalla funzione e va richiesta in qualche modo, con un input o un prompt, altrimenti la funzione avrebbe sempre lo stesso risultato,
 la variabile message deve essere un let in modo da poter essere riassegnata dopo il check, poi manca il print del messaggio
*/

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

/*
1. 
2. 
3. 
*/

// ESERCIZIO 3

function addNumbers() {
    /* aggiungo contatore */ 
    let contatore = prompt("quanti numeri devi sommare?");
    let userNumber = 0;
     /* const */ let total = userNumber + 12;

    for (let i = 0; i < contatore; i++)
    {
        userNumber = prompt("Inserisci un numero");
    }
    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


/*
1. la funzione dovrebbe prendere un tot di numeri in prompt e sommarli, stampando il totale
2. 
3. la funzione com'è è inutile perchè aggiunge un solo numero al totale, quindi aggiungo un contatore per richiedere quanti numeri sommare, poi total deve essere un let
*/

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

/*
1. controllo di una mail presente o meno in checklist, con permesso di accesso a seconda dell'esisto del controllo 
2. 
3. 
*/

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if /*(userEmail.length > 5)*/ (userEmail.includes(`@mail.com`)) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
}
    checkAccessImproved();

    /*
1. come l'esercizio precedente, ma con un controllo sulla lunghezza del prompt inserito
2. la funzione mancava di una parentesi graffa
3. 5 è un numero troppo ridotto per il controllo della mail, dovrebbe essere `@mail.com` almeno quindi lenght > 8 o meglio, un includes di `@mail.com`
*/


/*3
***********************************************
*/


/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'Diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'Benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'Metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'Elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'Benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'Metano'
    }, /*mancava la virgola*/
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) => /*la freccia era sbagliata*/ auto.type === 'Benzina');

const dieselCars = cars.filter( (auto) => {
    auto.type === 'Diesel';
});

const otherCars = cars.filter( (auto) => {
    return auto.type !== 'Benzina' /*|| è or, a noi serve and*/ && auto.type !== 'Diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);

/*
1. il codice controlla il tipo di motore delle automobili di un array e le stampa secondo tre criteri
2. mancava una virgola nella dichiarazione degli elementi dell'array, poi per avere un controllo accurato delle proprietà è importante stare attenti a usare sempre
la stessa sintassi, quindi "benzina" o "diesel" vanno sempre con la maiuscola o sempre senza
3. a riga 290 serviva un AND nella condizione
*/