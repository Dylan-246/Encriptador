document.getElementById("encriptar").addEventListener("click", encriptarTexto);
document.getElementById("desencriptar").addEventListener("click", desencriptarTexto);

function encriptarTexto() {
    let texto = document.getElementById("inputText").value;
    
    // Validar que solo tenga letras minúsculas y sin caracteres especiales
    if (/[^a-z\s]/.test(texto)) {
        alert("Por favor, ingresa solo letras minúsculas y sin caracteres especiales.");
        return;
    }

    // Reglas de encriptación
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Mostrar el resultado
    document.getElementById("outputText").value = textoEncriptado;
}


function desencriptarTexto() {
    let texto = document.getElementById("inputText").value;

    // Reglas de desencriptación
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Mostrar el resultado
    document.getElementById("outputText").value = textoDesencriptado;
}



