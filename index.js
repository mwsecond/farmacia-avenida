// cria referência aos elementos da página
const frm = document.querySelector(".form");
const imagem = document.querySelector("#capa");
const spanTotal = document.querySelector("#spanTotal");
const frm2 = document.querySelector(".lista_compras");
const spanTotal2 = document.querySelector("#spanTotal2");

let preco = 12;
let quant = 1;
let remedio = [];
let valorTotal = [];

// adiciona "ouvinte" de eventos ao programa
frm.selRemedio.addEventListener("change", () => {
  preco = 12;
  if (frm.selRemedio.value == "Dorflex") {
    imagem.src = "dorflex.webp";
    preco = 15;
  } else if (frm.selRemedio.value == "Dramin B6") {
    imagem.src = "draminb6.png";
    preco = 25;
  } else if (frm.selRemedio.value == "Buscofem") {
    imagem.src = "buscofem.jpg";
    preco = 30;
  } else if (frm.selRemedio.value == "Paracetamol") {
    imagem.src = "paracetamol.webp";
    preco = 15;
  }
  mostrarTotal();
});

function mostrarTotal() {
  const total = quant * preco;
  // muda o conteúdo de uma parte da página
  spanTotal.innerText = total.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
}
window.addEventListener("load", () => {
  mostrarTotal();
});

frm.selQuant.addEventListener("change", () => {
  quant = Number(frm.selQuant.value);
  mostrarTotal();
});

const lista_compras = document.querySelector(".lista_compras");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  remedio.push(frm.selRemedio.value);
  valorTotal.push(quant * preco);

  let resposta = [];
  for (let i = 0; i < remedio.length; i++) {
    resposta =
      resposta +
      "<h5>" +
      remedio[i] +
      "<span class='float-end me-2'>" +
      valorTotal[i].toLocaleString("pt-br", { minimumFractionDigits: 2 }) +
      "</span></h5>";
  }

  let soma = 0;
  valorTotal.forEach((item) => {
    soma += item;
  });

  lista_compras.innerHTML = resposta;
  spanTotal2.innerHTML = soma.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
});
/*
frm2.addEventListener("submit", (e) => {
   
  
  e.preventDefault()

  
  const paciente = frm2.paciente.value
  const atendimento = frm2.atendimento.value

  
  pacientes.push(paciente)
  atendimentos.push(atendimento)

  let resposta = ""
  for (let i=0; i<pacientes.length; i++) {
    resposta = resposta + "<h5>" + pacientes[i] + 
      "<span class='float-end me-2'>" +            
      atendimentos[i].toLocaleString("pt-br", {minimumFractionDigits: 2}) + 
      "</span></h5>"
  }

  
  
  listaAtend.innerHTML = resposta

  
  frm2.paciente.value = ""
  frm2.atendimento.value = ""

  
  frm2.paciente.focus()
})
*/
