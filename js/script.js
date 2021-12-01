// seleziono l'header
const pageHeader = document.querySelector("header");
// genero il titolo e lo metto in pagina
const pageTitle = document.createElement("h1");
pageTitle.append("Campo Minato: La Griglia");
pageHeader.append(pageTitle);
// genero la parte dell'header per selezionare la difficoltà
const difficultyLabel = document.createElement("label");
difficultyLabel.append("difficolt&aacute;:");
difficultyLabel.for = "difficulty";

const difficultySelect= document.createElement("select");
difficultySelect.name = "difficulty"; 
difficultySelect.id = "difficulty"; 
difficultySelect.value = "easy"; 

let difficultyOption = document.createElement("option");
difficultyOption.innerHTML = "easy";
difficultyOption.value = "easy";
difficultySelect.appendChild(difficultyOption);
difficultyOption = document.createElement("option");
difficultyOption.innerHTML = "hard";
difficultyOption.value = "hard";
difficultySelect.appendChild(difficultyOption);
difficultyOption = document.createElement("option");
difficultyOption.innerHTML = "crazy";
difficultyOption.value = "crazy";
difficultySelect.appendChild(difficultyOption);

const difficultyButton = document.createElement("button");

pageHeader.appendChild(difficultySelect)