// Variables for HTML
let containerEl = document.getElementById("container");
let inputEl = document.getElementById("FName");
let input2El = document.getElementById("LName");
let allBtn = document.getElementById("allNickN");
let randBtn = document.getElementById("randNickN");
let nickname;

document.addEventListener("click", allBtn);
document.addEventListener("click", randBtn);

fetch("nickname.txt").then(convertData).then(processData);

function convertData(rawData) {
    return rawData.text();
}

function processData(stringData){
    nickname = stringData.split(/\r?\n/);
}

function allBtn() {
    let firstName = inputEl.value;
    let lastName = input2El.value;
    let divStr = "";
    for (let i = 0; i < nickname.length; i++);
    divStr += `<div> ${firstName} "${nickname[i]}" ${lastName} </div>`;
    containerEl.innerHTML = divStr
}

function randBtn() {
    let firstName = inputEl.value;
    let lastName = input2El.value;
    let randName = randomElement(nickname);
    for (let i = 0; i < nickname.length; i++);
    containerEl.innerHTML = `<div> ${firstName} "${randName}" ${lastName} </div>`;
}