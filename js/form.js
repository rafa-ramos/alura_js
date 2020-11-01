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
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
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
