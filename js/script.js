const key = "6eb8aed40f812e253dc5273a4ffda645";

const inputCidade= document.querySelector(".input-cidade");
const cidade =  document.querySelector(".cidade");
const temp =  document.querySelector(".temp");
const textoPrevisao = document.querySelector(".texto-previsao")
const umidade = document.querySelector(".umidade");
const imgPrevisao =document.querySelector(".img-previsao");
const botaoBusca = document.querySelector(".botao-busca");


//colocar na tela o foi digitado, buscado e retornado
function colocarDados(dados){
    cidade.innerHTML="Tempo em "+dados.name;
    temp.innerHTML=Math.floor(dados.main.temp)+"&deg;C";
    textoPrevisao.innerHTML=dados.weather[0].description;
    umidade.innerHTML="Umidade: "+dados.main.humidity+"%";
    imgPrevisao.src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}


//buscar no servidor assincrono/aguardar a busca
// então responder json (Arrow functions)/em portugues
async function buscarCidade(cidade){
    const dados= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json());

    colocarDados(dados)
}

//pegar o que foi digitado/colocar na função que busca no servidor
function buttonBusca(){
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade);
}


// evente teclado (enter)
inputCidade.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
      const  cidade = e.target.value;
  
      buscarCidade(cidade);
    }
});
