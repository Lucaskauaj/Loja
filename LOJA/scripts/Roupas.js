document.addEventListener("DOMContentLoaded", function () {
    const card = document.getElementById("card");
    const cardContent = document.querySelector(".card-content");
    const closecard = document.querySelector(".close");
    const cardtitulo = document.getElementById("card-titulo");
    const cardimagem = document.getElementById("card-imagem");
    const cardDescricao = document.getElementById("card-Descricao");
    const cardpreco = document.getElementById("card-preco");

    // Dados dos produtos
    const produtos = [
        { id: 1, nome: "Produto 1", descricao: "Descrição do Produto 1", preco: "R$ 10,00", imagemm: "/img/oia.png" },
        { id: 2, nome: "Produto 2", descricao: "Descrição do Produto 2", preco: "R$ 10,00", imagemm: "produto2.jpg" },
        { id: 3, nome: "Produto 3", descricao: "Descrição do Produto 3", preco: "R$ 10,00", imagemm: "produto3.jpg" },
        { id: 4, nome: "Produto 4", descricao: "Descrição do Produto 4", preco: "R$ 10,00", imagemm: "produto4.jpg" },
        { id: 5, nome: "Produto 5", descricao: "Descrição do Produto 5", preco: "R$ 10,00", imagemm: "produto5.jpg" },
        { id: 6, nome: "Produto 6", descricao: "Descrição do Produto 6", preco: "R$ 10,00", imagemm: "produto6.jpg" }
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
    closecard.addEventListener("click", function () {
        card.style.display = "none";
    });

    // Fecha o card se o usuário clicar fora do conteúdo do card
    window.addEventListener("click", function (event) {
        if (event.target === card) {
            card.style.display = "none";
        }
    });

    // Adiciona evento de clique nas imagens dos cartões
    const cartoes = document.querySelectorAll(".cartao");
    cartoes.forEach(cartao => {
        cartao.addEventListener("click", function () {
            const id = parseInt(cartao.getAttribute("data-id"));
            const produto = produtos.find(p => p.id === id);
            if (produto) {
                opencard(produto);
            }
        });
    });
});