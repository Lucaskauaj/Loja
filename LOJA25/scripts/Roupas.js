document.addEventListener("DOMContentLoaded", function() {
    const card = document.getElementById("card");
    const cardContent = document.querySelector(".card-content");
    const closecard = document.querySelector(".close");
    const cardtitulo = document.getElementById("card-titulo");
    const cardimagem = document.getElementById("card-imagem");
    const cardDescricao = document.getElementById("card-Descricao");
    const cardpreco = document.getElementById("card-preco");

    // Dados dos produtos
    const produtos = [
        { id: 1, nome: "Batom líquido Mate", descricao: "Com efeito mate e textura aveludada como uma pétala, este batom líquido traz cor e conforto para os lábios.", preco: "R$ 10,00", imagemm: "/img/download.jpeg" },
        { id: 2, nome: "O Espelho de Maquiagem com Led Niina Secrets", descricao: "É o acessório que faltava para compor sua experiência de make e skincare e deixar você se sentindo uma estrela. Com uma iluminação em led que permite ser usado em qualquer ambiente e iluminação, o espelho é fácil de utilizar e multifuncional. ", preco: "R$ 10,00", imagemm: "/img/download (1).jpeg" },
        { id: 3, nome: "Paleta de Sombras Niina Secrets Orange", descricao: "É a tendência do verão que você pediu! Em edição limitada e colecionável, traz a sombra laranja em uma maquiagem em tons terrosos com muita cor e brilho para os diferentes tons de pele, para makes básicas até as mais elaboradas.", preco: "R$ 10,00", imagemm: "/img/download (2).jpeg" },
        { id: 4, nome: "Pó Translúcido Niina Secrets Kabuki ", descricao: "É a solução ideal para manter sua maquiagem impecável ao longo do dia. Com um efeito matificante, ele controla a oleosidade e proporciona um acabamento suave e natural à pele. Sua textura fina garante que o produto se espalhe uniformemente, evitando acúmulos indesejados.", preco: "R$ 10,00", imagemm: "/img/download (3).jpeg" },
        { id: 5, nome: "Esponja De Maquiagem Facial Niina Secrets", descricao: "Ideal para texturas cremosas ou em pó, essa esponja pode ser usada para a aplicação de base líquida, corretivo, contorno e pó compacto. A textura ultra aveludada possibilita uma perfeita aplicação e acabamento natural e uniforme.", preco: "R$ 10,00", imagemm: "/img/download (4).jpeg" },
        { id: 6, nome: "Pó Solto Ultrafino Perfect Match Niina Secrets", descricao: "Possui acabamento aveludado e natural, durando o dia todo. Sua fórmula disfarça linhas de expressão, controla o brilho, sela e fixa a maquiagem sem pesar ou marcar, deixando a pele respirar e permite construir camadas: quanto mais aplicação maior a cobertura.", preco: "R$ 10,00", imagemm: "/img/download (5).jpeg" }
    ];

    // Função para abrir o card com os detalhes do produto
    function opencard(produto) {
        cardtitulo.textContent = produto.nome;
        cardimagem.src = produto.imagemm;
        cardDescricao.textContent = produto.descricao;
        cardpreco.textContent = produto.preco;
        card.style.display = "flex";
    }

    // Adiciona evento de clique para fechar o card
    closecard.addEventListener("click", function() {
        card.style.display = "none";
    });

    // Fecha o card se o usuário clicar fora do conteúdo do card
    window.addEventListener("click", function(event) {
        if (event.target === card) {
            card.style.display = "none";
        }
    });

    // Adiciona evento de clique nas imagens dos cartões
    const cartoes = document.querySelectorAll(".cartao");
    cartoes.forEach(cartao => {
        cartao.addEventListener("click", function() {
            const id = parseInt(cartao.getAttribute("data-id"));
            const produto = produtos.find(p => p.id === id);
            if (produto) {
                opencard(produto);
            }
        });
    });
});