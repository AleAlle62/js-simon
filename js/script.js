/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

passaggi:

1. creazione array di numeri casuali da 1 a 100            OK!
2. creazione di un timer di 30 secondi             OK!
3. finito il timer l'array scompare 
4. chiedere tramite prompt, i numeri dell'array             OK!
5. confrontare i numeri inseriti con quelli generati 
6. dire quanti sono uguali  
*/

// 0. DICHIARAZIONI VARIABILI GLOBALI
let numeriHtml = document.querySelector('.numeri-casuali')




// 1. CREAZIONE DEI NUMERI CASUALI
//dichiarazione array
let arrayRandom = [];
// ciclo che dice per quanti numeri viene ripetuto
for (var i = 0; i < 5 ; i++){
    //creazione dei numeri random
    let result = true;
    let numberRandom = Math.floor(Math.random()*100)+1;
    for (var j = 0; j < i; j++){
        if (arrayRandom [j] == numberRandom)result =false;
    }
    if (result){
        arrayRandom[i] = numberRandom;
    } else {
        i--;
    }
}
console.log(arrayRandom)
//stampa dei numeri casuali in pagina 
numeriHtml.innerHTML = `<div class=".numeri-casuali">${arrayRandom}</div>`



// 2. CREAZIONE DEL TIMER DI 30 SECONDI 
//creazione del tempo di partenza per il counter
let counter = 5;

// intervallo di tempo per cui cambia il contdown 
let idInterval = setInterval(count, 1000);

// creazione funzione del counter, con all'interno la funzione che se arriva a zero fa il prompt
function count() {
	if (counter === 0) {

        // COME CANCELLARE I NUMERI CASUALI?
        




        // stampa in console
		console.log('scaduto il tempo per memorizzare')
        // stampa la domanda dei numeri da chiedere con un ciclo di 5 volte
        for (let i = 0; i < 5; i++){
            prompt('insersci i numeri che ti ricordi')
        }
		clearInterval(idInterval)
        //far sparire l'array di numeri

	} else {
		console.log(counter)
		counter--
	}
}