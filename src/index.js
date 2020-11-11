import cipher from './cipher.js';
// -- Mostrando seccion de cifrado
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

    let offset = document.getElementById("numeroSecreto").value;
    offset = parseInt(offset);
    let texto = document.getElementById("textToEncode").value;
    texto = texto.toUpperCase();
    cipher.encode(texto,offset)
document.getElementById("encodedText").innerHTML = cipher.encode(texto, offset);
})
// -- Mostrando seccion de descifrado
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

let offset = document.getElementById("numeroSecreto2").value;
offset = parseInt(offset);
let texto = document.getElementById("textToDecode").value;
texto = texto.toUpperCase();
cipher.encode(texto,offset)
document.getElementById("decodedText").innerHTML = cipher.decode(texto, offset);
})