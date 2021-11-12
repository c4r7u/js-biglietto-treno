var chilometri, eta, prezzo, sconto20, sconto40, prezzofinale

// Chiedo i chilometri che deve percorrere
chilometri = parseInt(prompt("Quanti km devi percorrere?"));

// Chiedo l'età del viaggiatore
eta = parseInt(prompt("Quanti anni hai"));

// Calcolo il prezzo del viaggio totale (0.21 cent /km)senza sconti
prezzo = 0.21;
prezzofinale = chilometri * prezzo;
console.log(prezzofinale);

//Calcolo variabili sconto
sconto20 = (prezzofinale * 20) / 100;
sconto40 = (prezzofinale * 40) / 100;

// Calcolo i prezzi finali con le varie variabili
if (eta < 18) {
    prezzofinale = prezzofinale - sconto20;
    document.getElementById('price').innerHTML = ('€ ') + prezzofinale.toFixed(2);
} else if (eta > 65) {
    prezzofinale = prezzofinale - sconto40;
    document.getElementById('price').innerHTML = ('€ ') + prezzofinale.toFixed(2);
} else {
    document.getElementById('price').innerHTML = ('€ ') + prezzofinale.toFixed(2);
}