import englishToMorse from './data/data'

const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const output = document.querySelector("output");


button.addEventListener("click", () => {
    let translator = input.value;
    translator = translator.toLowerCase();
    translator = translator.split("");
});