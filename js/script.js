/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

passaggi:

1. creazione array di numeri casuali da 1 a 100            OK!
2. far sparire i numeri casuali dopo 30 secondi          OK!
3. finito il timer l'array scompare                        OK!
4. chiedere tramite prompt, i numeri dell'array             OK!
5. confrontare i numeri inseriti con quelli generati         OK!
6. dire quanti sono uguali              DA FINIRE!!!!!!!!!!!!!!!!!
*/ m



// 0. DICHIARAZIONI VARIABILI GLOBALI
let numeriHtml = document.querySelector('.numeri-casuali')
let finalResultOk = document.querySelector ('.risultato-finale-ok')
let finalResultNo = document.querySelector ('.risultato-finale-no')
let titolo = document.querySelector ('h1')

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
console.log('numeri casuali:' , arrayRandom)
//stampa dei numeri casuali in pagina 
numeriHtml.innerHTML = `<div class=".numeri-casuali">${arrayRandom}</div>`




//2. FAR SPARIRE I NUMERI CASUALI

//dopo 5 secondi i numeri spariscono
setTimeout(sparizioneNumeri, 5000)

function sparizioneNumeri (){
    numeriHtml.classList.add('displaynone')
    titolo.classList.add('displaynone')
}

// far apparire il promt dopo pochi secondi che sono andati via i numeri random 
setTimeout(chiedereNumeriUtente, 6000)

//creazione array dove andranno i numeri inseriti
let arrayPrompt = []

function chiedereNumeriUtente(){
    //funzione che ne chiama 5
    for(let i = 0; i < 5; i++){
        let numeriInseriti = parseInt(prompt('inserisci i numeri che ricordi')) 
        arrayPrompt.push(numeriInseriti)
    }
    //stampa dei numeri messi nell'array
    console.log('numeri inseriti:' , arrayPrompt)
    
//3 confrontare quanti numeri inseriti sono ugali a quelli casuali
    var isEqual = arrayPrompt.toString() === arrayRandom.toString();
    // controllo in console 
    console.log(isEqual);
    //messaggio a seconda dei valori giusti o sbagliati
    if (isEqual === true) {
        finalResultOk.innerHTML = `<div class=".risultato-finale-ok">${'CORRETTO hai fatto 50 punti'}</div>`
    } else {
        finalResultNo.innerHTML = `<div class=".risultato-finale-no">${'SBAGLIATO !!! i numeri da inserire erano:' + arrayRandom + 'hai fatto 0 punti'}</div>`
    }
}

