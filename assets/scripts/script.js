
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
for (let i = 0; i > 5; i++) {
    console.log(i);
}


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]



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
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


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


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

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
    checkAccessImproved();



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
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) >= auto.type === 'benzina');

const dieselCars = cars.filter( (auto) => {
    auto.type === 'diesel';
});

const otherCars = cars.filter( (auto) => {
    return auto.type !== 'benzina' || auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);