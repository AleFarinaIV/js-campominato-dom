//Definisco la funzione che creerà i quadrati
function createSquare(){
    // dichiaro una variabile per creare un elemento all'interno del DOM
    let currentElement = document.createElement('div')

    //assegno la classe square all'elemento creato
    currentElement.classList.add('square')

    // restituisco il quadrato contenuto nella variabile creata precedentemente
    return currentElement
}

// Dichiaro una variabile per il bottone e lo recupero dal dom tramite l'ID
const button = document.getElementById('start')

// Dichiaro una variabile per la griglia e recupero l'elemento dal dom tramite l'ID
const grid = document.getElementById('field')

//Creo un evento click per il bottone che andrà a generare il tutto
button.addEventListener('click', function() /*handlerClick(event)*/ {

    // svuotare la griglia per ricominciare
    grid.innerHTML = '';
    
    // utilizzo un ciclo FOR di 100 iterazioni per creare la griglia di gioco 10x10
    for (let i = 0; i < 100; i++) {

        // dichiaro una variabile per la creazione del singolo quadrato
        let fieldSquare = createSquare()

        // inserisco il numero progressivo nel quadrato
        fieldSquare.innerText = i + 1

        // appendo il quadrato all'interno della griglia
        grid.append(fieldSquare)

        // creo un evento click per il quadrato creato
        fieldSquare.addEventListener('click', function () {

            /*il quadrato selezionato dall'utente dovrà cambiare colore,
            al momento del click aggiungo/tolgo la classe selected*/
            this.classList.toggle('selected')
            console.log(this.innerText)
        })
    }
    // event.target.removeEventListener('click', handlerClick);
})