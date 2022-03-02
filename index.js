let segundo = document.querySelector(".segundo");
let minuto = document.querySelector(".minuto");
let hora = document.querySelector(".hora");

function updatePointers() {
    let momentoAtual = new Date();
    let anguloHora = horaToAngulo(momentoAtual.getHours());
    let anguloMin = minutoToAngulo(momentoAtual.getMinutes());
    let anguloSeg = segundoToAngulo(momentoAtual.getSeconds());
    rotateElement(hora, anguloHora);
    rotateElement(minuto, anguloMin);
    rotateElement(segundo, anguloSeg);
    console.log("Girando...");
    console.log(momentoAtual.getSeconds());
}

function horaToAngulo(horas) {
    return 30 * horas - 90; 
}

function minutoToAngulo(minutos) {
    return 6 * minutos - 90;
}

function segundoToAngulo(segundos) {
    return 6 * segundos - 90;
}

function rotateElement(elemento, angulo) {
    elemento.style.transform = `rotate(${angulo}deg)`;
}

setInterval(updatePointers, 1000);
