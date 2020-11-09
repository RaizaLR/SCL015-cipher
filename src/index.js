import cipher from './cipher.js';

const botonSeccionCifrado = document.getElementById("btnSeccionCifrado");
botonSeccionCifrado.addEventListener("click", function(){
const seccionBienvenida = document.getElementById("seccionBienvenida");
seccionBienvenida.style.display = "none";
const seccionCifrado = document.getElementById("seccionCifrado");
seccionCifrado.style.display = "block";
})

// funcionalidad boton cifrado
const botonCifrar = document.getElementById("btnCifrar");
botonCifrar.addEventListener("click", function(){

document.getElementById("encodedText").innerHTML = cipher.encode();
})
// ---------------------------------------------------

const botonSeccionDescifrado = document.getElementById("btnSeccionDescifrado");
botonSeccionDescifrado.addEventListener("click", function(){
const seccionBienvenida = document.getElementById("seccionBienvenida");
seccionBienvenida.style.display = "none";
const seccionDescifrado = document.getElementById("seccionDescifrado");
seccionDescifrado.style.display = "block";
})

// funcionalidad boton descifrado
const botonDescifrar = document.getElementById("btnDescifrar");
botonDescifrar.addEventListener("click", function(){


document.getElementById("decodedText").innerHTML = cipher.decode();
})