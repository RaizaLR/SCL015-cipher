import cipher from './cipher.js';

// funcionalidad boton cifrado
const botonCifrar = document.getElementById ("btnCifrar");
botonCifrar.addEventListener("click", function(){

let finalText = cipher.encode();

document.getElementById("encodedText").innerHTML = cipher.encode();
})
// ---------------------------------------------------
// funcionalidad boton descifrado
// const botonDescifrar = document.getElementById ("btnDescifrar");
// botonDescifrar.addEventListener("click", function(){

// let finalText = cipher.decode();

// document.getElementById("decodedText").innerHTML = finalText;
// })