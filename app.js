//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];

function adicionarAmigo() {
    
    let nomeAmigo = document.getElementById('amigo');
    let novoNome = nomeAmigo.value;
    
    listaDeNomes.push(novoNome);
    nomeAmigo.value = '';
    listaAtualizada();
}

function listaAtualizada() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for (let i = 0; i < listaDeNomes.length; i++) {
        let novaLista = document.createElement('li');
        novaLista.textContent = listaDeNomes[i];
        
        lista.appendChild(novaLista);
    }
}

function sortearAmigo() {
   
    let nomeAleatorio = parseInt(Math.random() * listaDeNomes.length);
    let nomeSorteado = listaDeNomes[nomeAleatorio];
    
    listaDeNomes.splice(nomeAleatorio, 1);
        listaAtualizada();
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Seu amigo é secreto: ' + nomeSorteado;
}