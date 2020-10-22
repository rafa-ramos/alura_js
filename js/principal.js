var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        //setColor(tdImc, paciente);
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        //setColor(tdImc, paciente);
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

/*
    function setColor(tdImc , paciente) {
        return (tdImc.style.backgroundColor = "red"), (paciente.style.backgroundColor = "gray");
    }
*/

/*  Função Nomeada:
    
    titulo.addEventListener("click", mostraMensagem);
    function mostraMensagem() {
        console.log("Olá eu fui clicado!");
    };

    Função Anônima:

    titulo.addEventListener("click", function() {
    console.log("olá eu fui clicado!");
});
*/

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function() {
    //previne o comportamento padrão, não recarregando a página o enviar o formulário
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var pacienteTr = document.createElement("tr");
    
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd.textContent = form.nome.value;
    pesoTd.textContent = form.peso.value;
    alturaTd.textContent = form.altura.value;
    gorduraTd.textContent = form.gordura.value;

    //appendChild() -> coloque como filho.
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.getElementById("tabela-pacientes");
    tabela.appendChild(pacienteTr);
    
    console.log(tabela);
    
});
