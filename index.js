// `` crase

var lista = [];
var pontosPlayer = [];
var pontosPC = [];

function pedra() {
    var escolhaPlayer = document.getElementById("player");
    var escolhaPC = document.getElementById("pc");
    var resultado = document.getElementById("resultado");

    escolhaPC.innerHTML = "";
    resultado.innerHTML = "";

    escolhaPlayer.innerHTML = `Você escolheu <b>PEDRA</b>.`;
    lista.push("PEDRA");
}

function papel() {
    var escolhaPlayer = document.getElementById("player");
    var escolhaPC = document.getElementById("pc");
    var resultado = document.getElementById("resultado");

    escolhaPC.innerHTML = "";
    resultado.innerHTML = "";

    escolhaPlayer.innerHTML = `Você escolheu <b>PAPEL</b>.`;
    lista.push("PAPEL")
}

function tesoura() {
    var escolhaPlayer = document.getElementById("player");
    var escolhaPC = document.getElementById("pc");
    var resultado = document.getElementById("resultado");

    escolhaPC.innerHTML = "";
    resultado.innerHTML = "";

    escolhaPlayer.innerHTML = `Você escolheu <b>TESOURA</b>.`;
    lista.push("TESOURA");
}

function jogar() {
    var escolhaPC = document.getElementById("pc");
    var resultado = document.getElementById("resultado");
    var ppt = ["PEDRA", "PAPEL", "TESOURA"];
    var placarPlayer = document.getElementById("placarPlayer");
    var placarPC = document.getElementById("placarPC");

    var numeroAleatorio = Math.floor(Math.random() * ppt.length);
    escolhaPC.innerHTML = `A inteligência artificial escolheu <b>${ppt[numeroAleatorio]}</b>.`;

    if (lista[lista.length - 1] == "PEDRA" && ppt[numeroAleatorio] == "PEDRA") {
        resultado.innerHTML = `Empate!`;
    }
    else if (lista[lista.length - 1] == "PEDRA" && ppt[numeroAleatorio] == "PAPEL") {
        resultado.innerHTML = `Você perdeu!`;
        pontosPC.push("Perdeu");
        placarPC.innerHTML = pontosPC.length;
    }
    else if (lista[lista.length - 1] == "PEDRA" && ppt[numeroAleatorio] == "TESOURA") {
        resultado.innerHTML = `Você ganhou!`;
        pontosPlayer.push("Ganhou");
        placarPlayer.innerHTML = pontosPlayer.length;
    }
    else if (lista[lista.length - 1] == "PAPEL" && ppt[numeroAleatorio] == "PAPEL") {
        resultado.innerHTML = `Empate!`;
    }
    else if (lista[lista.length - 1] == "PAPEL" && ppt[numeroAleatorio] == "TESOURA") {
        resultado.innerHTML = `Você perdeu!`;
        pontosPC.push("Perdeu");
        placarPC.innerHTML = pontosPC.length;
    }
    else if (lista[lista.length - 1] == "PAPEL" && ppt[numeroAleatorio] == "PEDRA") {
        resultado.innerHTML = `Você ganhou!`;
        pontosPlayer.push("Ganhou");
        placarPlayer.innerHTML = pontosPlayer.length;
    }
    else if (lista[lista.length - 1] == "TESOURA" && ppt[numeroAleatorio] == "TESOURA") {
        resultado.innerHTML = `Empate!`;
    }
    else if (lista[lista.length - 1] == "TESOURA" && ppt[numeroAleatorio] == "PEDRA") {
        resultado.innerHTML = `Você perdeu!`;
        pontosPC.push("Perdeu");
        placarPC.innerHTML = pontosPC.length;
    }
    else if (lista[lista.length - 1] == "TESOURA" && ppt[numeroAleatorio] == "PAPEL") {
        resultado.innerHTML = `Você ganhou!`;
        pontosPlayer.push("Ganhou");
        placarPlayer.innerHTML = pontosPlayer.length;
    }
    else {
        escolhaPC.innerHTML = "";
        resultado.innerHTML = `Escolha uma opção por favor.`;
    }
}

function reiniciar() {
    var escolhaPlayer = document.getElementById("player");
    var escolhaPC = document.getElementById("pc");
    var resultado = document.getElementById("resultado");
    var placarPlayer = document.getElementById("placarPlayer");
    var placarPC = document.getElementById("placarPC");

    escolhaPlayer.innerHTML = "";
    escolhaPC.innerHTML = "";
    resultado.innerHTML = "";
    placarPlayer.innerHTML = 0;
    placarPC.innerHTML = 0;
    pontosPC = [];
    pontosPlayer = [];
}