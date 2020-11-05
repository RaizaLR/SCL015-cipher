// const cipher = {
//   // ...
// };

// export default cipher;

const cipher = {

    encode() {
    let texto = document.getElementById("containerOne").value;

    let textoCifrado = "";

    for(let i= 0; i < texto.length; i++) {

        let textoEnAscii = texto.charCodeAt(i);

        let textoFormulado = (textoEnAscii - 65 + 1) %26 + 65;

        let letrasCifradas = String.fromCharCode(textoFormulado);

        textoCifrado= textoCifrado + letrasCifradas;
     
        }

        console.log(textoCifrado);

}
,
decode(){

    let texto = document.getElementById("containerOne").value;

    let textoDescifrado = "";

    for(let i= 0; i < texto.length; i++) {

        let textoEnAscii = texto.charCodeAt(i);

        let textoFormulado = (textoEnAscii - 65 - 1) %26 + 65;

        let letrasDescifradas = String.fromCharCode(textoFormulado);

        textoDescifrado= textoDescifrado + letrasDescifradas;
     
        }

        console.log(textoDescifrado);
}

}
