function encriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    var encriptado = frase.replace(/e/img, "enter");
    var encriptado = encriptado.replace(/o/img, "ober");
    var encriptado = encriptado.replace(/i/img, "imes");
    var encriptado = encriptado.replace(/a/img, "ai");
    var encriptado = encriptado.replace(/u/img, "ufat");

    //toma lo obtenido en la variable frase y a la letra "e" la reemplaza por "enter"
    /*el img =
              i = para que tome mayusculas y minusculas
              g = para que tome toda la linea u oracion
              m = para que tome en cuenta multiples lineas*/
    document.getElementById("textoDesencriptado").innerHTML = encriptado;
};

function desencriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    var desencriptado = frase.replace(/enter/img, "e");
    var desencriptado = desencriptado.replace(/ober/img, "o");
    var desencriptado = desencriptado.replace(/imes/img, "i");
    var desencriptado = desencriptado.replace(/ai/img, "a");
    var desencriptado = desencriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = desencriptado;
};

function copiar() {
    var contenido = document.querySelector("#textoDesencriptado");
    var range = document.createRange();
    range.selectNodeContents(contenido);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    alert("Texto copiado");
};
    //la variable guarda el contenido, el selector lo selecciona y el document.execcomand lo copia al clip
