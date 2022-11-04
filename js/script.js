/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

passaggi:

1. creazione array di numeri casuali da 1 a 100
2. creazione di un timer di 30 secondi
3. finito il timer l'array scompare 
4. chiedere tramite prompt, i numeri dell'array
5. confrontare i numeri inseriti con quelli generati 
6. dire quanti sono uguali  
*/

// 0. DICHIARAZIONI VARIABILI GLOBALI
let numeriHtml = document.querySelector('.numeri-casuali')




// 1. CREAZIONE DEI NUMERI CASUALI
//dichiarazione array
let arrayRandom = [];
// ciclo che dice per quanti numeri viene ripetuto
for (var i = 0; i < 6 ; i++){
    //creazione dei numeri random
    let numberRandom = Math.floor(Math.random()*100)+1;
    let result = true;
    for (var j = 0; j < i; j++){
        if (arrayRandom [j] == numberRandom)result =false;
    }
    if (result){
        arrayRandom[i] = numberRandom;
    } else {
        i--;
    }
}
// console.log(arrayRandom)
//stampa dei numeri casuali in pagina 
numeriHtml.innerHTML = `<div class=".numeri-casuali">${arrayRandom}</div>`



// 2. CREAZIONE DEL TIMER DI 30 SECONDI 