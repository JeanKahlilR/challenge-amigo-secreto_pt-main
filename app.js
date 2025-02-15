let amigo = [];
let sorteioRealizado = false;

const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');

function adicionarAmigo(){
    if (sorteioRealizado){
        alert('Sorteiro ja realizado. Atualize a pagina para reiniciar');
    } else{
        const nomeAmigo = inputAmigo.value.trim();
        if (nomeAmigo == ''){
            alert('Por favor, insira um nome!');
        }else{
            if(amigo.includes(nomeAmigo)){
                alert('Este nome ja foi adicionado, caso seja uma pessoa diferente inclua alguma distinção!')
            }else{
                amigo.push(nomeAmigo);
                atualizarListaAmigos();
                limparInput();
            }
        }
    }
}

function sortearAmigo(){
    if (sorteioRealizado){
        alert('Sorteiro ja realizado. Atualize a pagina para reiniciar');
    } else{
        if (amigo.length == 0){
            alert('Não a amigo para sortear');
        }else{
            const sorteioIndice = Math.floor(Math.random() * amigo.length);
            const amigoSorteado = amigo[sorteioIndice];
    
            listaAmigos.innerHTML = `<p>Seu amigo secreto é: ${amigoSorteado}</p>`;
    
            sorteioRealizado = true;
        }
    }
}


function limparInput(){
    inputAmigo.value = '';
}

function atualizarListaAmigos(){
    listaAmigos.innerHTML = '';

    amigo.forEach(amigo =>{
        const novoItem = document.createElement('li');
        novoItem.textContent = amigo;
        listaAmigos.appendChild(novoItem);
    });
}

