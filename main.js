"use strict"

//JSON - array de objetos
const imagens = [

    //criando um objeto
    {
        nome: 'castelo',
        url: './img/castelo.jpg'
    },
    {
        nome: 'castelo roxo',
        url: './img/casteloRoxo.jpg'
    },
    {
        nome: 'estrelada',
        url: './img/estrelada.webp'
    },
        {
        nome: 'foguete',
        url: './img/foguete.jpg'
    },
        {
        nome: 'casa branca',
        url: './img/casaBranca.jpeg'
    },
        {
        nome: 'cristo redentor',
        url: './img/cristoRedentor.jpeg'
    },
        {
        nome: 'japao',
        url: './img/japao.jpeg'
    },
        {
        nome: 'max',
        url: './img/maxresdefault.jpg'
    },
        {
        nome: 'peixe',
        url: './img/peixe.png'
    },
    
]


function criarImagem (srcImagem) {
    const galeria = document.getElementById('galeria')
    const imagem = document.createElement('img')
    imagem.src = srcImagem.url
    galeria.appendChild(imagem)
}

function criarTexto (nomeImagem) {
    const texto = document.getElementById('itens')
    const nome = document.createElement('span')
    nome.nome = nomeImagem.nome
    texto.appendChild(nome)
}

function carregarImagens() {

imagens.forEach (criarImagem)
imagens.forEach (criarTexto)


}

carregarImagens()