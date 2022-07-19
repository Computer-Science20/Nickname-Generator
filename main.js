// Variables for HTML
let containerEl = document.getElementById("container");
let inputEl = document.getElementById("FName");
let input2El = document.getElementById("LName");
let allBtn = document.getElementById("allNickN");
let randBtn = document.getElementById("randNickN");


//Global Variables
let nickname;

allBtn.addEventListener("click", allNickNGenerator);
randBtn.addEventListener("click", randNickNGenerator);

fetch("nickname.txt").then(convertData).then(processData);

function convertData(rawData) {
    return rawData.text();
}

function processData(stringData){
    nickname = stringData.split(/\r?\n/);
}

function allNickNGenerator() {
    let firstName = inputEl.value;
    let lastName = input2El.value;
    let divStr = "";
    for (let i = 0; i < nickname.length; i++);
    divStr += `<div> ${firstName} "${nickname[i]}" ${lastName} </div>`;
    containerEl.innerHTML = divStr
}

function randNickNGenerator() {
    let firstName = inputEl.value;
    let lastName = input2El.value;
    let randName = randomElement(nickname);
    containerEl.innerHTML = `<div> ${firstName} "${randName}" ${lastName} </div>`;
}
