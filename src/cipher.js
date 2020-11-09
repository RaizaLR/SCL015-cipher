const cipher = {

encode(texto,offset) {

    let textoCifrado = "";

    for(let i= 0; i < texto.length; i++) {

        let textoEnAscii = texto.charCodeAt(i);

        let textoFormulado = (textoEnAscii - 65 + offset) %26 + 65;

        if (textoEnAscii === 32) textoFormulado = 32;

        let letrasCifradas = String.fromCharCode(textoFormulado);

        textoCifrado= textoCifrado + letrasCifradas;
     
        }

        return textoCifrado;

}
,
decode(texto, offset){

    let textoDescifrado = "";

    for(let i= 0; i < texto.length; i++) {

        let textoEnAscii = texto.charCodeAt(i);

        let textoFormulado = (textoEnAscii + 65 - offset) %26 + 65;

        if (textoEnAscii === 32) textoFormulado = 32;

        let letrasDescifradas = String.fromCharCode(textoFormulado);

        textoDescifrado= textoDescifrado + letrasDescifradas;
     
        }

        return textoDescifrado;
}

}
export default cipher;