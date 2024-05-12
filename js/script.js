
// >  Scrivere un programma che chieda all’utente:

//     Il numero di chilometri da percorrere
//     Età del passeggero 
//     Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, 
//     secondo le seguenti regole:
//     il prezzo del biglietto è definito in base ai km (0.267113 € al km)
//     va applicato uno sconto del 24.552% per gli under 21
//     va applicato uno sconto del 37.893% per gli over 63.

// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), 
// realizziamo le specifiche scritte sopra.
// La risposta finale (o output) sarà anch’essa da scrivere in console.


// >chiedo negli input distanza ed età del passeggero e li dichiaro in js

let userDistance = document.querySelector('input#distance');
let userAge = document.querySelector('input#age');

// >definisco il prezzo standard del biglietto

const pricePerKm = userDistance * 0.267113; 

// >definisco gli sconti per età 

if (userAge >= 65) {

    console.log(((userDistance / 100) * 37.893).toFixed(2))
}
else if (userAge < 18) {

    console.log(((userDistance / 100) * 24.552).toFixed(2))
}
else{
    console.log((pricePerKm).toFixed(2))
}













const bottone = document.querySelector('button');


