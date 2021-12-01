// funzione che genera la partita
function playGame(choice, option1, option2, option3) {
    let ciro;
    if(choice.value == option1.value){
        innerHTML = "";
    } else if(choice.value == option2.value){
        innerHTML = "";
    } else if(choice.value == option3.value){
        innerHTML = "";
    }
    return console.log(ciro);
}


// seleziono l'header
const pageHeader = document.querySelector("header");
// genero il titolo e lo metto in pagina
const pageTitle = document.createElement("h1");
pageTitle.append("Campo Minato: La Griglia");
pageHeader.firstElementChild.append(pageTitle);
// genero la parte dell'header per selezionare la difficoltà
const difficultyDiv = document.createElement("div");

const difficultyLabel = document.createElement("label");
difficultyLabel.append("difficoltà:");
difficultyLabel.for = "difficulty";

const difficultySelect= document.createElement("select");
difficultySelect.name = "difficulty"; 
difficultySelect.id = "difficulty"; 

const difficultyOption1 = document.createElement("option");
difficultyOption1.innerHTML = "easy";
difficultyOption1.value = "easy";
difficultySelect.appendChild(difficultyOption1);
const difficultyOption2 = document.createElement("option");
difficultyOption2.innerHTML = "hard";
difficultyOption2.value = "hard";
difficultySelect.appendChild(difficultyOption2);
const difficultyOption3 = document.createElement("option");
difficultyOption3.innerHTML = "crazy";
difficultyOption3.value = "crazy";
difficultySelect.appendChild(difficultyOption3);

const difficultyButton = document.createElement("button");
difficultyButton.append("Play");

difficultyDiv.appendChild(difficultyLabel);
difficultyDiv.appendChild(difficultySelect);
difficultyDiv.appendChild(difficultyButton);

pageHeader.appendChild(difficultyDiv);



difficultyButton.addEventListener('click', () => {playGame(difficultySelect, difficultyOption1, difficultyOption2, difficultyOption3)});
