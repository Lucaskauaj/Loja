document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("Barra"); // Campo de pesquisa
    let results = document.getElementById("resultado"); // Mensagem de erro
    let loading = document.getElementById("loading"); // Loader
    let suggestions = document.getElementById("suggestions"); // Sugestões
    let cartoes = document.querySelectorAll(".cartao"); // Itens da lista

    let roupas = []; // Lista de roupas (será carregada do JSON)

    // Função para carregar as roupas do arquivo JSON
    function loadRoupas() {
        fetch('/data/roupas.json')
            .then(response => response.json())
            .then(data => {
                roupas = data;
            })
            .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
    }

    // Função para realizar a pesquisa
    function performSearch() {
        let searchText = searchInput.value.trim().toLowerCase(); // Captura o texto digitado

        if (searchText !== "") {
            loading.style.display = "flex"; // Exibe o loader

            setTimeout(() => {
                loading.style.display = "none"; // Esconde o loader

                let encontrou = false;

                // Percorre os cartões para filtrar
                cartoes.forEach(cartao => {
                    let titulo = cartao.querySelector("h3").textContent.toLowerCase();
                    if (titulo.includes(searchText)) {
                        cartao.style.display = "block"; // Exibe o cartão
                        encontrou = true;
                    } else {
                        cartao.style.display = "none"; // Oculta os cartões não correspondentes
                    }
                });

                // Exibir sugestões na barra de pesquisa
                let filtrados = roupas.filter(roupa => roupa.nome.toLowerCase().includes(searchText));

                if (filtrados.length > 0) {
                    suggestions.innerHTML = filtrados.map(roupa => `<li data-id="${roupa.id}">${roupa.nome}</li>`).join("");
                    suggestions.style.display = "block";
                    results.style.display = "none"; // Esconde a mensagem de erro
                } else {
                    results.innerHTML = "<p class='no-results'>Nenhum resultado foi encontrado. 😞</p>";
                    results.style.display = "block";
                    suggestions.style.display = "none";
                }
            }, 1000); // Simula um carregamento de 1s
        } else {
            // Se o campo estiver vazio, exibe todos os itens novamente
            cartoes.forEach(cartao => {
                cartao.style.display = "block";
            });
            results.style.display = "none"; // Esconde a mensagem
            suggestions.style.display = "none"; // Esconde sugestões
        }
    }

    // Carrega as roupas do arquivo JSON
    loadRoupas();

    // Evento ao digitar na barra de pesquisa
    searchInput.addEventListener("input", performSearch);

    // Evento ao pressionar "Enter"
    searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            performSearch();
        }
    });

    // Evento para selecionar uma sugestão
    suggestions.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            searchInput.value = e.target.textContent;
            suggestions.style.display = "none";
            performSearch();
        }
    });

    // Esconde as sugestões quando clicar fora
    document.addEventListener("click", function (e) {
        if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
            suggestions.style.display = "none";
        }
    });
});

suggestions.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        searchInput.value = e.target.textContent;
        performSearch();
    }
});

suggestions.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        searchInput.value = e.target.textContent;
        suggestions.style.display = "none"; // Fecha as sugestões
        performSearch();
    }
});
