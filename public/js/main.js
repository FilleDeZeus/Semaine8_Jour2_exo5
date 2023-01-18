//EXERCICE 1
let div = document.getElementById("content");

function logEvent(e) {
    console.log(e.target);
}
div.addEventListener("click",logEvent);

function borderred(e) {
    e.target.style.border = ("red 1px solid");
}

div.addEventListener("click",borderred);