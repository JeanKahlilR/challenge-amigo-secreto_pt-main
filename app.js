//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigo = [];

function adicionarAmigo(){

    let adicionar = document.querySelector('input').value;

    if (adicionar.trim() == ''){
        alert('Por Favor, insira um nome.');
    }else{        
        amigo.push(adicionar);
        listaDeAmigos();                
    }

    stringVazia();

    return amigo;
    
}


function sortearAmigo(){  
    let tamanhoAmigo = amigo.length;
    sorteioNumero = parseInt(Math.random() * tamanhoAmigo );
    let amigoSorteado = amigo[sorteioNumero];
    console.log(sorteioNumero, amigoSorteado);    
}




function stringVazia(){
    adicionar = document.querySelector('input').value = '';
}


function listaDeAmigos() {
    const input = document.getElementById('amigo');
    const nome = input.value;    
    const lista = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = nome;
    lista.appendChild(novoItem);      
}
