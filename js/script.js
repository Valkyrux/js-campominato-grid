// seleziono l'header
const pageHeader = document.querySelector("header");
// genero il titolo e lo metto in pagina
const pageTitle = document.createElement("h1");
pageTitle.append("Campo Minato: La Griglia");
pageHeader.firstElementChild.append(pageTitle);
// genero la parte dell'header per selezionare la difficoltà
const difficultyForm = document.createElement("form");

const difficultyLabel = document.createElement("label");
difficultyLabel.append("difficoltà:");
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
difficultyButton.append("Play");

difficultyForm.appendChild(difficultyLabel);
difficultyForm.appendChild(difficultySelect);
difficultyForm.appendChild(difficultyButton);

pageHeader.appendChild(difficultyForm);

difficultyButton.addEventListener("click")