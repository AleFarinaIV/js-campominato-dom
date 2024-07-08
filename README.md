# Consegna

1. Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

2. Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

3. In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

4. La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

5. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

# Scomposizione del problema

Una volta copiata la base del file costruita precedentemente:

Creiamo un array vuoto

Creiamo un counter

Utilizzando un ciclo WHILE 
    generiamo 16 numeri casuali compresi tra 1 e 100

    IF il nostro array non contiene già il numero creato

        pushamo il numero al suo interno

Andiamo a modificare l'evento click del quadrato già esistente

    creiamo una nuova variabile per convertire il numero progressivo nel quadrato in un numero

    IF il nostro array contiene il numero all'interno del quadrato

        il quadrato viene colorato di rosso

        notifichiamo all'utente la sconfitta, il punteggio e la possibilità di ricominciare a giocare

    ELSE

        il quadrato si colora di azzurro

        il counter sale

        IF counter === 84

            notifichiamo all'utente la vittoria, il punteggio e la possibilità di ricominciare a giocare

