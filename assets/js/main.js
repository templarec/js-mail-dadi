//chiedo all'utente l'inserimento della mail
var email = prompt("Inserisci la tua email");

//genero un array di email per confrontare
var listaEmail = ["templarec@gmail.com", "ciccio@pippo.it"];

//setto una variabile flag
var emailTrovata = false;

//inizializzo variabile per inserimento in html
var output = document.getElementById("output");

//verifico che il campo non sia vuoto
if (email != null) {
    //scorro l'array e controllo se esiste la mail inserita
    for (i = 0; i < listaEmail.length; i++){
        if (email == listaEmail[i]){
            emailTrovata = true;
        }
    }
    //condizione se trovo la mail oppure no, lo stampo sulla pagina
    if (emailTrovata) {
        output.innerHTML = "Email trovata!";
        console.log("Email trovata");
    } else {
        output.innerHTML = "Email non trovata, sicuro di avere accesso?";
        console.log("Email non trovata");
    }
} else {
    alert("Inserisci una mail!");
    console.log("Email non inserita");
}

//BONUS DADI
//chiedo il nome del giocatore
var nome = prompt("Inserisci il tuo nome");

//tiro i dadi
var giocatore = Math.floor(Math.random() * 6) + 1;
var computer = Math.floor(Math.random() * 6) + 1;

//inizializzo variabile per stampare in html
var vincitore = document.getElementById("bonus");

//verifico se è un pareggio
if (giocatore == computer) {
    vincitore.innerHTML = "Pareggio! (" + giocatore + " a " + computer + ")";
} else { //altrimenti verifico quale numero è maggiore
    if (giocatore > computer) {
        vincitore.innerHTML = "Vince " + nome + " (" + giocatore + " a "
            + computer + ")";
    } else {
        vincitore.innerHTML = "Vince il computer! (" + computer + " a "
            + giocatore + ")";
    }

}
