let englishToMorse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
};


let morseToEnglish = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": 'h',
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
};


// English to Morse
const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");


button.addEventListener("click", () => {
    let translator = input.value;
    translator = translator.toLowerCase().split("");
    for (let i = 0; i < translator.length; i++) {
        translator[i] = englishToMorse[translator[i]];
    }
    translator = translator.join(" ");
    output.innerHTML = translator;
});

//  Morse to English
const morseInput = document.querySelector("#morseInput");
const buttonToEnglish = document.querySelector("#btnToEn");
const outputInEnglish = document.querySelector("#outputInEnglish");


buttonToEnglish.addEventListener("click", () => {
    let translation = morseInput.value;
    translation = translation.toLowerCase().split("");
    for (let i = 0; i < translation.length; i++) {
        translation[i] = morseToEnglish[translation[i]];
    }
    translation = translation.join(" ");
    outputInEnglish.innerHTML = translation;
});