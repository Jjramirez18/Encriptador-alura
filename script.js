const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado) {
    let matrizCod = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCod.length; i++) {
        if (stringEncriptado.includes(matrizCod[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCod[i][0], matrizCod[i][1]);
        }
    }
    return stringEncriptado;
};


function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptado) {
    let matrizCod = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCod.length; i++) {
        if (stringDesencriptado.includes(matrizCod[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCod[i][1], matrizCod[i][0]);
        }
    }
    return stringDesencriptado;
};


function btnCopiar() {
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado")
}


