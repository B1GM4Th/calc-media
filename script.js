function calculaMedia() {
  var primeiroSemestre = document.getElementById("notaPrimeiroSemestre");
  var valorDoPrimeiroSemestre = primeiroSemestre.value;
  var valorNumericoPrimeiroSemestre = parseFloat(valorDoPrimeiroSemestre);

  var segundoSemestre = document.getElementById("notaSegundoSemestre");
  var valorDoSegundoSemestre = segundoSemestre.value;
  var valorNumericoSegundoSemestre = parseFloat(valorDoSegundoSemestre);

  var terceiroSemestre = document.getElementById("notaTerceiroSemestre");
  var valorDoTerceiroSemestre = terceiroSemestre.value;
  var valorNumericoTerceiroSemestre = parseFloat(valorDoTerceiroSemestre);

  var quartoSemestre = document.getElementById("notaQuartoSemestre");
  var valorDoQuartoSemestre = quartoSemestre.value;
  var valorNumericoQuartoSemestre = parseFloat(valorDoQuartoSemestre);

  var mediaFinal = (valorNumericoPrimeiroSemestre + valorNumericoSegundoSemestre + valorNumericoTerceiroSemestre + valorNumericoQuartoSemestre) /4
  console.log(mediaFinal);

  var insertJs = document.getElementById("retornoJavaScript");
  var textHtml = "Sua média final é " + mediaFinal;
  insertJs.innerHTML = textHtml;

  if (mediaFinal >= 6) {
    var aprovado = document.getElementById("aprovado");
    var textoAprovado = "Parabens, você foi aprovado";
    aprovado.innerHTML = textoAprovado;

  } else {
    var reprovado = document.getElementById("reprovado");
    var textoReprovado = "Você foi reprovado!";
    reprovado.innerHTML = textoReprovado;
  }

  if (mediaFinal == 10) {
    var parabens = document.getElementById("parabens");
    var textoParabens = "Continue assim, você está no caminho certo <3";
    parabens.innerHTML = textoParabens;
  }
} 