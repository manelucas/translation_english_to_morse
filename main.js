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