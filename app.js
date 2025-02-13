//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigo = [];

function adicionarAmigo(){

    let adicionar = document.querySelector('input').value;

    if (adicionar == ''){
        alert('Por Favor, insira um nome.');
    }else{
        amigo.push(adicionar);
        console.log(amigo);        
    }
    stringVazia()
}



function stringVazia(){
    adicionar = document.querySelector('input');
    adicionar.value = '';
}