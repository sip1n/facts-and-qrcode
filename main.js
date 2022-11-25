const request = new XMLHttpRequest();
const form = document.querySelector("#qr-form");
const input = document.querySelector("#qr-input");
const qrImg = document.querySelector("#qr-code-img");
const faktaBtn = document.querySelector("#new-fact");

// get and parse json to javascript object from api
function fakta() {

    request.open("GET", "https://uselessfacts.jsph.pl/random.json?language=en");

    request.send();

    request.addEventListener('load', () => {
        let data = JSON.parse(request.responseText)
        document.querySelector(".fact-item").innerHTML = data.text;
    })
}
// get value from inputfield and generate a qr code from that text 
form.addEventListener("submit", e =>  {
    e.preventDefault();
    qrImg.setAttribute("src", "https://api.qrserver.com/v1/create-qr-code/?data="+input.value+"&size=300x300&bgcolor=6c757d");
    input.value = "";
})
// when new fact button has been pressed get new fact and display it
faktaBtn.addEventListener("click", () => {
    fakta();
})
// when all dom elements are loaded run function fakta
window.addEventListener("DOMContentLoaded", () => {
    fakta();
})