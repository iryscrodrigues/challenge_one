var campoTexto = document.querySelector("#txtin");
var campoTexto1 = document.getElementById("tt1");
var campoTexto2 = document.getElementById("tt2");
var textin = document.querySelector("#txtin");
var cbtn = document.querySelector("#cbutton");
var descbtn = document.querySelector("#descbutton");
var copbtn = document.querySelector("#copbutton");

function limparCampoTexto() {
  var campoTexto = document.querySelector("#txtin");
  campoTexto.value = "";
}

function criptografar() {
  var entrada = textin.value.toLowerCase();
  var saida = entrada.replace(/e/gim, "enter");
  var saida = saida.replace(/o/gim, "ober");
  var saida = saida.replace(/i/gim, "imes");
  var saida = saida.replace(/a/gim, "ai");
  var saida = saida.replace(/u/gim, "ufat");
  document.getElementById("imgaside").style.display = "block";
  var campoTexto1 = document.getElementById("tt1");
  campoTexto1.textContent = "Sua mensagem foi criptografada";
  document.getElementById("tt2").innerHTML = saida;
  document.getElementById("copbutton").style.display = "block";
}

function descriptografar() {
  var entrada = textin.value.toLowerCase();
  var saida = entrada.replace(/enter/gim, "e");
  var saida = saida.replace(/ober/gim, "o");
  var saida = saida.replace(/imes/gim, "i");
  var saida = saida.replace(/ai/gim, "a");
  var saida = saida.replace(/ufat/gim, "u");
  document.getElementById("tt2").innerHTML = saida;
  var campoTexto1 = document.getElementById("tt1");
  campoTexto1.textContent = "Sua mensagem foi descriptografada";
}

window.onload = function () {
  var campoTexto2 = document.getElementById("tt2");
  campoTexto2.readOnly = true;
};

function copiar() {
  var conteudo = document.querySelector("#tt2");
  conteudo.select();
  document.execCommand("copy");
  alert("Copiado!");
}

cbtn.onclick = criptografar;
descbtn.onclick = descriptografar;
copbtn.onclick = copiar;
