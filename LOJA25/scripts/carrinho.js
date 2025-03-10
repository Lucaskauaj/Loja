// let carrinho = JSON.parse(localStorage.getItem('carrinho')) || {};

//   function salvarCarrinho() {
//     localStorage.setItem('carrinho', JSON.stringify(carrinho));
//   }

//   function alterarQuantidade(id, quantidade) {
//     if (!carrinho[id]) {
//       carrinho[id] = 0;
//     }
//     carrinho[id] += quantidade;
//     if (carrinho[id] <= 0) {
//       delete carrinho[id];
//     }
//     salvarCarrinho();
//     atualizarCarrinho();
//   }

//   function removerDoCarrinho(id) {
//     delete carrinho[id];
//     salvarCarrinho();
//     atualizarCarrinho();
//   }

//   function atualizarCarrinho() {
//     for (const id in carrinho) {
//       const quantidade = carrinho[id];
//       document.getElementById(`quantidade-${id}`).innerText = quantidade;
//       const preco = 120; // Preço fixo para exemplo, você pode ajustar conforme necessário
//       document.getElementById(`total-${id}`).innerText = `R$ ${preco * quantidade}`;
//     }
//     // Atualizar o resumo da compra
//     const subtotal = Object.keys(carrinho).reduce((total, id) => total + carrinho[id] * 120, 0);
//     document.querySelector('.info div span:last-child').innerText = `R$ ${subtotal}`;
//     document.querySelector('footer span:last-child').innerText = `R$ ${subtotal}`;
//   }

//   document.addEventListener('DOMContentLoaded', atualizarCarrinho);
