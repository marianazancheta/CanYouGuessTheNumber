var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 0;
var tentativasRestantes = 3;
var resultado = document.getElementById("resultado");

function Chutar() {
  if (tentativa < 3) {
    tentativa++;
    tentativasRestantes--;
    var chuteForm = document.getElementById("valor")
    var chute = parseInt(chuteForm.value);
    if (chute == numeroSecreto) {
      resultado.innerHTML = "Acertou!";
    } else if (chute > 10 || chute < 0) {
      resultado.innerHTML =
        "Você deve digitar um número de 0 a 10" + "<br/>" + "você ainda tem " + tentativasRestantes +
" chance(s)";
    } else if (chute > numeroSecreto) {
      resultado.innerHTML =
        "Errou! O seu chute foi maior que o número secreto" + "<br/>" + "você ainda tem " + tentativasRestantes + " chance(s)";
    } else {
      resultado.innerHTML =
        "Errou! O seu chute foi menor que o número secreto" + "<br/>" + "você ainda tem " + tentativasRestantes + " chance(s)";
    }
    chuteForm.value = ""
    if (tentativa >= 3 && chute !== numeroSecreto) {
      resultado.innerHTML =
        "Tentativas esgotadas! O número secreto era " + numeroSecreto;
    }
  }
}

function resetar() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativa = 0;
  tentativasRestantes = 3;
  resultado.innerHTML = ""
}