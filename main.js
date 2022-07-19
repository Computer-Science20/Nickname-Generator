// Variables for HTML
let containerE1 = document.getElementById("container");
let inputE1 = document.getElementById("FName");
let inputE2 = document.getElementById("LName");
let allBtn = document.getElementById("allNickN");
let randBtn = document.getElementById("randNickN");
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
    let firstName = inputE1.value;
    let lastName = inputE2.value;
    let divStr = "";
    for (let i = 0; i < nickname.length; i++);
    divStr += `<div> ${firstName} "${nickname[1]}" ${lastName} </div>`;
    containerE1.innerHTML = divStr
}

function randNickNGenerator() {
    let firstName = inputE1.value;
    let lastName = inputE2.value;
    let randName = randomElement(nickname);
    containerE1.innerHTML = `<div> ${firstName} "${randName}" ${lastName} </div>`;
}

function randomElement(anArray) {
    return anArray[randomInt(0, anArray.length)]
}