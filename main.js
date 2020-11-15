import englishToMorse from './data/data'


const text = document.getElementsByTagName("input");
const buttonEnToMorse = document.querySelector("#en-morse"); 
const morseToEn = document.querySelector("#morse-en");
let p = document.querySelector("p");

buttonEnToMorse.addEventListener("click", (e) => {
    p.innerHTML = "hello";
})




let translateFunction = (letter) => {
    const morseTranslation = enToMorse[letter];
    console.log(morseTranslation);
}