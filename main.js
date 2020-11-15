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

const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");


button.addEventListener("click", () => {
    let translator = input.value;
    translator = translator.toLowerCase();
    translator = translator.split("");
    for (var i = 0; i < translator.length; i++) {
        translator[i] = englishToMorse[translator[i]];
    }
    translator = translator.join(" ");
    console.log(translator);
    output.innerHTML = translator;
});



let morseToEnglish = {
    ".-": "a", 
    "-...": "b", 
    "-.-.": "c", 
    "-..": "d", 
    ".": "e", 
    "..-.":  "f", 
    "--.": "g", 
    "....": 'h', 
    "..":  "i", 
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


const morseInput = document.querySelector("#morseInput");
const buttonToEnglish = document.querySelector("#btnToEn");
const outputInEnglish= document.querySelector("#outputInEnglish");


buttonToEnglish.addEventListener("click", () => {
    let translation = morseInput.value;
    translation = translation.split("");
    for (var i = 0; i < translation.length; i++) {
        translation[i] = morseToEnglish[translation[i]];
    }
    translation = translation.join(" ");
    console.log(translation);
    outputInEnglish.innerHTML = translation;
});