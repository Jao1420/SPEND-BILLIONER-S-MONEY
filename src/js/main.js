import * as cartService from './cart/cartFunctions.js';

document.querySelectorAll('.btn-click').forEach(button => {
  button.addEventListener('click', function () {
    // Encontra o card mais próximo (pai com classe billionaire-card)
    const card = this.closest('.billionaire-card');

    // Pega o nome do bilionário do atributo data-name
    escolhaUsuario = card.getAttribute('data-name');

    console.log('Você escolheu:', escolhaUsuario);
    // alert(`Você escolheu: ${escolhaUsuario}`);
    location.href = "spendMoney.html";

  });
});

let escolhaUsuario = null;
const myCart = [];
let total = 0;
const itens = [
  {
    id: 1,
    name: "SPOTIFY YEAR PREMIUM",
    price: 160,
    image: "spotify.png"
  },
  {
    id: 2,
    name: "NETFLIX YEAR PREMIUM",
    price: 300,
    image: "netflix.png"
  },
  {
    id: 3,
    name: "FOOD'S",
    price: 500,
    image: "food.png"
  },
  {
    id: 4,
    name: "IPHONE 17 PRO MAX",
    price: 1200,
    image: "iphone.png"
  },
  {
    id: 5,
    name: "S26",
    price: 1300,
    image: "samsung.png"
  },
  {
    id: 6,
    name: "LAMBORGHINI PURPLE",
    price: 1435873,
    image: "lambo.png"
  },
  {
    id: 7,
    name: "FERRARI RED",
    price: 7500000,
    image: "ferrari.png"
  },
  {
    id: 8,
    name: "CHOPPER",
    price: 14000000,
    image: "chopper.png"
  },
  {
    id: 9,
    name: "MANSION LUXURY",
    price: 85000000,
    image: "mansion.png"
  },
  {
    id: 10,
    name: "IATE",
    price: 256934800,
    image: "iate.png"
  },
  {
    id: 11,
    name: "BARCA",
    price: 5650000000,
    image: "barca.png"
  },
  {
    id: 12,
    name: "DaJC",
    price: 450000000,
    image: "dajc.png"
  },
  {
    id: 13,
    name: "REAL MADRID",
    price: 6750000000,
    image: "real.png"
  }
];

const container = document.querySelector('.product'); // Seleciona o container cinza

// Limpa o conteúdo estático que estava no HTML
container.innerHTML = "";

itens.forEach(item => {
  container.innerHTML += `
        <div class="product-info" data-id="${item.id}">
            <img src="assets/img/${item.image}" alt="${item.name}">
            <h2 class="data-name">${item.name}</h2>
            <p>$${item.price.toLocaleString('pt-BR')}</p>
            <div>
                <button class="sell-btn">SELL</button>
                <span class="qty">0</span>
                <button class="buy-btn">BUY</button>
            </div>
        </div>
    `;
});


container.addEventListener('click', (event) => {
  const target = event.target;
  
  // Identifica se o clique foi em um dos botões que nos interessam
  const isBuy = target.classList.contains('buy-btn');
  const isSell = target.classList.contains('sell-btn');

  if (!isBuy && !isSell) return;

  // Lógica comum para ambos os botões
  const card = target.closest('.product-info');
  const idCapturado = card.dataset.id;
  const produtoDados = itens.find(i => i.id == idCapturado);
  const qtySpan = card.querySelector('.qty');
  let currentQty = parseInt(qtySpan.textContent);

  if (isBuy) {
    // Ação de Compra
    currentQty++;
    myCart.push(produtoDados);
    total += produtoDados.price;
  } else if (isSell && currentQty > 0) {
    // Ação de Venda
    currentQty--;
    const index = myCart.findIndex(item => item.id == produtoDados.id);
    if (index !== -1) {
      myCart.splice(index, 1);
      total -= produtoDados.price;
    }
  }


  qtySpan.textContent = currentQty;
  
  console.log(`Carrinho atual (${isBuy ? 'COMPROU' : 'VENDEU'}):`, myCart);
  console.log("Total atual:", total.toFixed(2)); // .toFixed(2) ajuda com centavos no JS
});



export {
  escolhaUsuario,
  myCart,
  total
};