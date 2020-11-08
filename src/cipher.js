const cipher = {

encode() {

    let offset = document.getElementById("numeroSecreto").value;
    offset =   parseInt(offset);
    let texto = document.getElementById("textToEncode").value;
    texto = texto.toUpperCase();
    let textoCifrado = "";

    for(let i= 0; i < texto.length; i++) {

        let textoEnAscii = texto.charCodeAt(i);

        let textoFormulado = (textoEnAscii - 65 + offset) %26 + 65;

        let letrasCifradas = String.fromCharCode(textoFormulado);

        textoCifrado= textoCifrado + letrasCifradas;
     
        }

        return textoCifrado;

}
,
decode(){

    let offset = document.getElementById("numeroSecreto2").value;
    offset =   parseInt(offset);
    let texto = document.getElementById("textToDecode").value;
    texto = texto.toUpperCase();
    let textoDescifrado = "";

    for(let i= 0; i < texto.length; i++) {

        let textoEnAscii = texto.charCodeAt(i);

        let textoFormulado = (textoEnAscii + 65 - offset) %26 + 65;

        let letrasDescifradas = String.fromCharCode(textoFormulado);

        textoDescifrado= textoDescifrado + letrasDescifradas;
     
        }

        return textoDescifrado;
}

}
export default cipher;