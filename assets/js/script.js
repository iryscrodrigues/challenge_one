var textin = document.querySelector("#txtin");
var cbtn = document.querySelector("#cbutton");
var descbtn = document.querySelector("#descbutton");
var copbtn = document.querySelector("#copbutton");

function limparCampoTexto() {
  textin.value = "";
}

function criptografar() {
  var entrada = textin.value.toLowerCase();
  var saida = entrada.replace(/e/gim, "enter");
  saida = saida.replace(/o/gim, "ober");
  saida = saida.replace(/i/gim, "imes");
  saida = saida.replace(/a/gim, "ai");
  saida = saida.replace(/u/gim, "ufat");
  document.getElementById("imgaside").style.display = "block";
  document.getElementById("tt1").textContent = "Sua mensagem foi criptografada";
  document.getElementById("tt2").innerHTML = saida;
  document.getElementById("copbutton").style.display = "block";
}

function descriptografar() {
  var entrada = textin.value.toLowerCase();
  var saida = entrada.replace(/enter/gim, "e");
  saida = saida.replace(/ober/gim, "o");
  saida = saida.replace(/imes/gim, "i");
  saida = saida.replace(/ai/gim, "a");
  saida = saida.replace(/ufat/gim, "u");
  document.getElementById("tt2").innerHTML = saida;
  document.getElementById("tt1").textContent =
    "Sua mensagem foi descriptografada";
}

window.onload = function () {
  document.getElementById("tt2").readOnly = true;
};

function copiar() {
  var conteudo = document.querySelector("#tt2");
  conteudo.select();
  document.execCommand("copy");
  alert("Copiado!");
}

function noCharacters() {
  var regex = new RegExp("[/^a-z0-9s/]+$");
  var text = textin.value;

  if (!regex.test(text)) {
    alert(
      "Atenção! Não é permitido caracteres especiais ou letras maiúsculas."
    );
    document.getElementById("tt2").textContent =
      "Por gentileza, digite seu texto novamente sem caracteres especiais ou letras maiúsculas.";
    return false;
  } else {
    return true;
  }
}

cbtn.onclick = function () {
  if (noCharacters()) {
    criptografar();
  }
};

descbtn.onclick = function () {
  if (noCharacters()) {
    descriptografar();
  }
};

copbtn.onclick = copiar;
