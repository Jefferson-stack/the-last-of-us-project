/* 
    *Objetivo -- quando clocarmos no botão temos que mostras a imagem de fudo correspodente    

    - passo 1 - dar um heito de indentificar o elemento html dos botões

    -passo 2 - dar um jeito de indentificar o clique do usuáro no botão

    -passo 3 - desmarcar o botão selecionado anterior

    -passo 4 - marcar o botão clicando como se estivesse selecionado
    
    -passo 5 - esconder a imagem anterior

    -passo 6 - fazer aparecer a imagem correspondente ao botão clicado

 */



const botoesCarrossel =  document.querySelectorAll('.botao'); 
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) =>{
    botao.addEventListener('click', () =>{
         
    
  
        const botaoSelecionado = document.querySelector('.selecionado');
         botaoSelecionado.classList.remove('selecionado');
        
         botao.classList.add('selecionado');
        
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');


        imagens[indice].classList.add('ativa');


    })
} )





