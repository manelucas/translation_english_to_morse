

const text = document.getElementsByTagName("input");
const buttonEnToMorse = document.querySelector("#en-morse"); 
const morseToEn = document.querySelector("#morse-en");
let p = document.querySelector("p");

buttonEnToMorse.addEventListener("click", (e) => {
    p.innerHTML = "hello";
})


let enToMorse = {
    A: ".-", 
    B: "-...", 
    C: "-.-.", 
    D: "-..", 
    E: ".", 
    F: "..-.", 
    G: "--.", 
    H: "....", 
    I: "..", 
    J: ".---", 
    K: "-.-", 
    L: ".-..", 
    M: "--", 
    N: "-.", 
    O: "---", 
    P: ".--.", 
    Q: "--.-", 
    R: ".-.", 
    S: "...", 
    T: "-", 
    U: "..-", 
    V: "...-", 
    W: ".--", 
    X: "-..-", 
    Y: "-.--", 
    Z: "--..",
};


let translateFunction = () => {
    for (const letter in enToMorse) {
    return (`${letter}: ${enToMorse[letter]}`);
    }
}




// let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

//  let example = "HELLO";
// let scan = [];

// let translateEnToMorse = () => {
//     let scan = example.split("")
//     for (let i = 0; i < alphabet.length; i++) {
//         for (let j = 0; j < scan.length; j++ {

//         }
//         if (scan === alphabet[i]) {
//             for (let j = 0; j < morse.length; j++ {
                
                
//             }
//         }
        
//     morse