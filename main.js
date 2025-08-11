"use strict"

//JSON - array de objetos
const imagens = [

    //criando um objeto
    {
        nome: 'Castelo',
        url: './img/castelo.jpg'
    },
    {
        nome: 'Castelo Roxo',
        url: './img/casaBranca.jpeg'
    },
    {
        nome: 'Noite Estrelada',
        url: './img/estrelada.webp'
    },
        {
        nome: 'Foguete',
        url: './img/foguete.jpg'
    },
        {
        nome: 'Casa Branca',
        url: './img/casteloRoxo.jpg'
    },
            {
        nome: 'Japão',
        url: './img/japao.jpeg'
    },
        {
        nome: 'Cristo Redentor',
        url: './img/cristoRedentor.jpeg'
    },

        {
        nome: 'Golem de Pedra',
        url: './img/maxresdefault.jpg'
    },
        {
        nome: 'Peixe',
        url: './img/peixe.png'
    },
    
]


function criarImagem (srcImagem) {
    const galeria = document.getElementById('galeria')
    const itens = document.createElement('div')
    const imagem = document.createElement('img')
    const nomeImagem = document.createElement('span')
    imagem.src = srcImagem.url
    nomeImagem.textContent = srcImagem.nome

    galeria.appendChild(itens)
    itens.appendChild(imagem)
    itens.appendChild(nomeImagem)
}

function carregarImagens() {

imagens.forEach (criarImagem)

}

carregarImagens()