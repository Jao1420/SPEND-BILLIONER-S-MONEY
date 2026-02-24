

let escolhaUsuario = null;
document.querySelectorAll('.btn-click').forEach(button => {
  button.addEventListener('click', function () {
    const card = this.closest('.billionaire-card');

    // Captura os dados corretamente
    const idCapturado = card.querySelector('.img').id;
    const nomeBillionaire = card.getAttribute('data-name');
    // Pega o data-value do <p> ou <h2>
    const worth = card.querySelector('.billionaire-front p').getAttribute('data-value');

    console.log('Selecionado:', {
      idCapturado,
      nomeBillionaire,
      worth
    });

    // Salva no sessionStorage (persiste entre páginas na mesma aba)
    sessionStorage.setItem('billionaireId', idCapturado);
    sessionStorage.setItem('billionaireName', nomeBillionaire);
    sessionStorage.setItem('billionaireWorth', worth);

    // Redireciona
    window.location.href = "spendMoney.html";
  });
});


const myCart = [];
let total = 0;

// Pega o valor do bilionário selecionado (do sessionStorage)
let billionaireWorth = 0;
try {
  billionaireWorth = Number((sessionStorage.getItem('billionaireWorth') || '0').replace(/\./g, ''));
} catch (e) {
  billionaireWorth = 0;
}

// Função para atualizar o patrimônio na tela
function atualizarPatrimonioTela() {
  const worthEl = document.getElementById('worth-value');
  if (worthEl && window.animateWorthValue) {
    // Pega o valor atual exibido
    const currentText = worthEl.textContent.replace(/[^\d]/g, '');
    const currentValue = Number(currentText);
    // Anima do valor atual para o novo valor
    window.animateWorthValue(currentValue, billionaireWorth, 900);
  } else if (worthEl) {
    worthEl.textContent = `$${billionaireWorth.toLocaleString('en-US')}`;
  }
}

// Cria o container do resumo

let resumoDiv = document.createElement('div');
resumoDiv.id = 'resumo-compras';
resumoDiv.style = 'width: 70%; margin: 20px auto; background: #eee; border-radius: 10px; padding: 20px; color: #222; font-family: monospace; font-size: 1.5rem;';
// Garante que o resumo fique sempre no final da página
window.addEventListener('DOMContentLoaded', function() {
  document.body.appendChild(resumoDiv);
});

function atualizarResumo() {
  // Conta quantos de cada item tem no carrinho
  const resumo = {};
  myCart.forEach(item => {
    if (!resumo[item.name]) {
      resumo[item.name] = {
        qtd: 0,
        total: 0,
        price: item.price
      };
    }
    resumo[item.name].qtd++;
    resumo[item.name].total += Number(String(item.price).replace(/\./g, "").replace(",", "."));
  });
  let html = '<b>Resumo das compras:</b><br>';
  let totalGeral = 0;
  Object.entries(resumo).forEach(([nome, info]) => {
    html += `${nome}: <b>${info.qtd}x</b>, total = $${info.total.toLocaleString('pt-BR')}<br>`;
    totalGeral += info.total;
  });
  html += `<hr><div style="font-size:2.3rem;font-weight:bold;color:#2ecc40;text-align:right;margin-top:18px;letter-spacing:1px;">Total geral:<span style='margin-left:12px;'>$${totalGeral.toLocaleString('pt-BR')}</span></div>`;

  // Mensagem de consciência de classe
  const worth = Number((sessionStorage.getItem('billionaireWorth') || '0').replace(/\./g, ''));
  if (myCart.length === 0) html = '<b>Nenhum item comprado ainda.</b>';
  resumoDiv.innerHTML = html;
}

// Inicializa o resumo vazio e o patrimônio na tela
atualizarResumo();
atualizarPatrimonioTela();

// Limpa o conteúdo estático que estava no HTML
document.querySelector('.product').innerHTML = "";

let itens = [{
    id: 1,
    name: "SPOTIFY YEAR PREMIUM",
    price: "160",
    image: "spotify.png"
  },
  {
    id: 2,
    name: "NETFLIX YEAR PREMIUM",
    price: "300",
    image: "netflix.png"
  },
  {
    id: 3,
    name: "FOOD'S",
    price: "500",
    image: "food.png"
  },
  {
    id: 4,
    name: "IPHONE 17 PRO MAX",
    price: "1200",
    image: "iphone.png"
  },
  {
    id: 5,
    name: "S26",
    price: "1300",
    image: "samsung.png"
  },
  {
    id: 6,
    name: "XBOX SERIES X",
    price: "700",
    image: "xbox.png"
  },
  {
    id: 7,
    name: "PLAYSTATION PRO",
    price: "800",
    image: "ps5.png"
  },
  {
    id: 8,
    name: "LAMBORGHINI PURPLE",
    price: "1.435.873",
    image: "lambo.png"
  },
  {
    id: 9,
    name: "FERRARI RED",
    price: "7.500.000",
    image: "ferrari.png"
  },
  {
    id: 10,
    name: "HELICOPTER",
    price: "14.000.000",
    image: "chopper.png"
  },
  {
    id: 11,
    name: "POKEMON CARD",
    price: "16.400.000",
    image: "pokemon.png"
  },
  {
    id: 12,
    name: "MANSION LUXURY",
    price: "85.000.000",
    image: "mansion.png"
  },
  {
    id: 13,
    name: "IATE",
    price: "256.934.800",
    image: "iate.png"
  },
  {
    id: 14,
    name: "RB17",
    price: "6.759.366",
    image: "rb17.png"
  },
  {
    id: 15,
    name: "SALVATOR MUNDI",
    price: "450.000.000",
    image: "dajc.png"
  },
  {
    id: 16,
    name: "CROWN ROYAL",
    price: "591.000.000",
    image: "crown.png"
  },
  {
    id: 17,
    name: "BARÇA",
    price: "5.650.000.000",
    image: "barca.png"
  },
  {
    id: 18,
    name: "REAL MADRID",
    price: "6.750.000.000",
    image: "real.png"
  }
];

// IDs dos itens que só podem ser comprados uma vez
const itensUnicos = [11, 15, 16, 17, 18];
itens.forEach(item => {
  document.querySelector('.product').innerHTML += `
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



document.querySelector('.product').addEventListener('click', (event) => {
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
  const buyBtn = card.querySelector('.buy-btn');

  if (isBuy) {
    // Ação de Compra
    let precoItem = Number(String(produtoDados.price).replace(/\./g, "").replace(",", "."));
    if (billionaireWorth - precoItem < 0) {
      alert('Você não pode gastar mais do que o valor do bilionário!');
      return;
    }
    // Se for item único e já tiver 1, não permite comprar mais
    if (itensUnicos.includes(Number(idCapturado)) && currentQty >= 1) {
      alert('Este item só pode ser comprado uma vez!');
      return;
    }
    currentQty++;
    myCart.push(produtoDados);
    total += precoItem;
    billionaireWorth -= precoItem;
    atualizarPatrimonioTela();
    // Se for item único, desabilita o botão de compra
    if (itensUnicos.includes(Number(idCapturado)) && currentQty >= 1) {
      buyBtn.disabled = true;
      buyBtn.style.opacity = 0.5;
      buyBtn.style.cursor = 'not-allowed';
    }
  } else if (isSell && currentQty > 0) {
    // Ação de Venda
    currentQty--;
    const index = myCart.findIndex(item => item.id == produtoDados.id);
    if (index !== -1) {
      let precoItem = Number(String(produtoDados.price).replace(/\./g, "").replace(",", "."));
      myCart.splice(index, 1);
      total -= precoItem;
      billionaireWorth += precoItem;
      atualizarPatrimonioTela();
    }
    // Se for item único e vendeu tudo, reabilita o botão de compra
    if (itensUnicos.includes(Number(idCapturado)) && currentQty === 0) {
      buyBtn.disabled = false;
      buyBtn.style.opacity = 1;
      buyBtn.style.cursor = 'pointer';
    }
  }

  qtySpan.textContent = currentQty;
  atualizarResumo();

  console.log(`Carrinho atual (${isBuy ? 'COMPROU' : 'VENDEU'}):`, myCart);
  console.log("Total atual:", total.toFixed(2)); // .toFixed(2) ajuda com centavos no JS
});



