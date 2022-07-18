// Variables for HTML
let containerE1 = document.getElementById("container");
let inputE1 = document.getElementById("FName");
let inputE2 = document.getElementById("LName");
let randBtn = document.getElementById("randNickN");
let allBtn = document.getElementById("allNickN");

randBtn.addEventListener("click", randomNickname);
allBtn.addEventListener("click", allNicknames);