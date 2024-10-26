let inputTexto = document.querySelector("#input-texto");

function btnCriptografar() {
    const texto = inputTexto.value;
    const resultadoCripto = texto
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    document.getElementById('output').innerHTML = `
        <textarea id="output-texto">${resultadoCripto}</textarea>
        <button onclick="copiar()" class="container-bnts" id="copiar">Copiar</button>
    `;
    inputTexto.value = "";
}

function btnDesencriptar (){
    const texto = inputTexto.value;
    const resultadoCripto = texto
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    document.getElementById('output').innerHTML = `
        <textarea id="output-texto">${resultadoCripto}</textarea>
        <button onclick="copiar()" class="container-bnts" id="copiar">Copiar</button>
    `; 
    inputTexto.value = "";
}

function copiar(){
    const textocop = document.getElementById('output-texto');

    textocop.select();
    document.execCommand('copy');
}