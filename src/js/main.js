
// â”€â”€â”€ Product Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const itens = [
  { id: 1,  name: "SPOTIFY PREMIUM (1 YEAR)",    price: 160,         image: "spotify.png",    category: "streaming"    },
  { id: 2,  name: "NETFLIX PREMIUM (1 YEAR)",    price: 300,         image: "netflix.png",    category: "streaming"    },
  { id: 3,  name: "LUXURY DINNER FOR TWO",       price: 500,         image: "food.png",       category: "lifestyle"    },
  { id: 4,  name: "iPHONE 17 PRO MAX",           price: 1200,        image: "iphone.png",     category: "tech"         },
  { id: 5,  name: "SAMSUNG GALAXY S26 ULTRA",    price: 1300,        image: "samsung.png",    category: "tech"         },
  { id: 6,  name: "XBOX SERIES X",               price: 700,         image: "xbox.png",       category: "tech"         },
  { id: 7,  name: "PLAYSTATION PRO",             price: 800,         image: "ps5.png",        category: "tech"         },
  { id: 8,  name: "LAMBORGHINI PURPLE",          price: 1435873,     image: "lambo.png",      category: "cars"         },
  { id: 9,  name: "FERRARI RED",                 price: 7500000,     image: "ferrari.png",    category: "cars"         },
  { id: 10, name: "HELICOPTER",                  price: 14000000,    image: "chopper.png",    category: "aviation"     },
  { id: 11, name: "POKEMON CARD (1ST EDITION)",  price: 16400000,    image: "pokemon.png",    category: "collectibles" },
  { id: 12, name: "LUXURY MANSION",              price: 85000000,    image: "mansion.png",    category: "real-estate"  },
  { id: 13, name: "SUPERYACHT",                  price: 256934800,   image: "iate.png",       category: "nautical"     },
  { id: 14, name: "RED BULL RB17",               price: 6759366,     image: "rb17.png",       category: "cars"         },
  { id: 15, name: "SALVATOR MUNDI",              price: 450000000,   image: "DaJC.png",       category: "collectibles" },
  { id: 16, name: "CROWN OF SAINT WENCESLAS",    price: 591000000,   image: "crown.png",      category: "collectibles" },
  { id: 17, name: "FC BARCELONA",                price: 5650000000,  image: "barca.png",      category: "sports"       },
  { id: 18, name: "REAL MADRID CF",              price: 6750000000,  image: "real.png",       category: "sports"       },
];

const UNIQUE_ITEMS = new Set([11, 15, 16, 17, 18]);

const CATEGORIES = [
  { id: "all",          label: "All"          },
  { id: "streaming",    label: "Streaming"    },
  { id: "tech",         label: "Tech"         },
  { id: "lifestyle",    label: "Lifestyle"    },
  { id: "cars",         label: "Cars"         },
  { id: "aviation",     label: "Aviation"     },
  { id: "nautical",     label: "Nautical"     },
  { id: "collectibles", label: "Collectibles" },
  { id: "real-estate",  label: "Real Estate"  },
  { id: "sports",       label: "Sports"       },
];

// â”€â”€â”€ State â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let billionaireWorth = 0;
let initialWorth     = 0;
let myCart           = [];
let totalSpent       = 0;
let activeCategory   = "all";

// â”€â”€â”€ Helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function formatMoney(value) {
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(1)}K`;
  return `$${value.toLocaleString("en-US")}`;
}

function getQtyInCart(itemId) {
  return myCart.filter(i => i.id === itemId).length;
}

// â”€â”€â”€ Balance Display â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function updateBalance(value) {
  const el = document.getElementById("worth-value");
  if (!el) return;
  el.textContent = formatMoney(value);
  el.className = "";
  if (value <= 0)                      el.classList.add("danger");
  else if (value < initialWorth * 0.1) el.classList.add("warning");
}

function animateBalance(from, to, duration = 600) {
  const start = performance.now();
  const diff  = to - from;
  (function step(now) {
    const p     = Math.min((now - start) / duration, 1);
    const eased = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
    updateBalance(Math.round(from + diff * eased));
    if (p < 1) requestAnimationFrame(step);
    else       updateBalance(to);
  })(performance.now());
}

// â”€â”€â”€ Progress Bar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function updateProgress() {
  const pct   = initialWorth > 0 ? Math.min((totalSpent / initialWorth) * 100, 100) : 0;
  const fill  = document.getElementById("progress-fill");
  const label = document.getElementById("progress-label");
  if (fill)  fill.style.width = `${pct}%`;
  if (label) label.textContent = `${pct.toFixed(1)}% spent`;
}

// â”€â”€â”€ Toast â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  // Keep at most 3 toasts — remove oldest instantly when at limit
  const existing = container.querySelectorAll(".toast");
  if (existing.length >= 3) {
    existing[0].remove();
  }
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add("show")));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 350);
  }, 2800);
}

// â”€â”€â”€ Category Filters â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function buildFilters() {
  const bar = document.getElementById("filter-bar");
  if (!bar) return;
  bar.innerHTML = "";
  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat.id === "all" ? " active" : "");
    btn.dataset.category = cat.id;
    btn.textContent = cat.label;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = cat.id;
      renderProducts(cat.id);
    });
    bar.appendChild(btn);
  });
}

// â”€â”€â”€ Product Rendering â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderProducts(category = "all") {
  const grid = document.querySelector(".product");
  if (!grid) return;
  const filtered = category === "all" ? itens : itens.filter(i => i.category === category);
  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="no-items">No items in this category.</p>';
    return;
  }

  filtered.forEach(item => {
    const qty      = getQtyInCart(item.id);
    const isUnique = UNIQUE_ITEMS.has(item.id);
    const cantBuy  = billionaireWorth < item.price || (isUnique && qty >= 1);
    const catLabel = CATEGORIES.find(c => c.id === item.category)?.label ?? "";

    const card = document.createElement("div");
    card.className = "product-info";
    card.dataset.id = item.id;
    card.innerHTML = `
      <span class="category-badge">${catLabel}</span>
      <img src="assets/img/${item.image}" alt="${item.name}" loading="lazy">
      <h2>${item.name}</h2>
      <p class="item-price${billionaireWorth < item.price ? " unaffordable" : ""}">$${item.price.toLocaleString("en-US")}</p>
      <div class="qty-controls">
        <button class="sell-btn" ${qty === 0 ? "disabled" : ""}>-</button>
        <input class="qty-input" type="number" value="${qty}" min="0"${isUnique ? ' max="1"' : ''}>
        <button class="buy-btn" ${cantBuy ? "disabled" : ""}>+</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// â”€â”€â”€ Re-evaluate buy button states after each action â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function refreshBuyButtons() {
  document.querySelectorAll(".product-info").forEach(card => {
    const id      = Number(card.dataset.id);
    const item    = itens.find(i => i.id === id);
    if (!item) return;
    const qtyEl   = card.querySelector(".qty-input");
    const qty     = qtyEl ? parseInt(qtyEl.value) : 0;
    const buyBtn  = card.querySelector(".buy-btn");
    const sellBtn = card.querySelector(".sell-btn");
    const priceEl = card.querySelector(".item-price");
    const cantBuy = billionaireWorth < item.price || (UNIQUE_ITEMS.has(id) && qty >= 1);
    if (buyBtn)  buyBtn.disabled  = cantBuy;
    if (sellBtn) sellBtn.disabled = qty === 0;
    if (priceEl) priceEl.classList.toggle("unaffordable", billionaireWorth < item.price);
  });
}

// â”€â”€â”€ Cart Summary â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function updateCartSummary() {
  const list  = document.getElementById("cart-items-list");
  const total = document.getElementById("cart-total");
  const badge = document.getElementById("cart-total-items");

  const summary = {};
  myCart.forEach(item => {
    if (!summary[item.id]) summary[item.id] = { name: item.name, qty: 0, subtotal: 0 };
    summary[item.id].qty++;
    summary[item.id].subtotal += item.price;
  });

  if (!list) return;
  const entries = Object.values(summary);
  if (entries.length === 0) {
    list.innerHTML = '<li class="cart-empty">No items purchased yet.</li>';
  } else {
    list.innerHTML = entries.map(s => `
      <li class="cart-item">
        <span class="cart-item-name">${s.name}</span>
        <span class="cart-item-qty">&#215;${s.qty}</span>
        <span class="cart-item-total">$${s.subtotal.toLocaleString("en-US")}</span>
      </li>
    `).join("");
  }

  if (total) total.textContent = `$${totalSpent.toLocaleString("en-US")}`;
  if (badge) badge.textContent = myCart.length;
}

// â”€â”€â”€ Buy / Sell Click Handler â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
document.addEventListener("click", (e) => {
  const isBuy  = e.target.classList.contains("buy-btn");
  const isSell = e.target.classList.contains("sell-btn");
  if (!isBuy && !isSell) return;
  if (e.target.disabled) return;

  const card = e.target.closest(".product-info");
  if (!card) return;
  const id   = Number(card.dataset.id);
  const item = itens.find(i => i.id === id);
  if (!item) return;

  const qtyInput = card.querySelector(".qty-input");
  let qty = parseInt(qtyInput.value);

  if (isBuy) {
    if (billionaireWorth < item.price) {
      showToast("Not enough balance!", "error");
      return;
    }
    if (UNIQUE_ITEMS.has(id) && qty >= 1) {
      showToast("This item can only be purchased once!", "warning");
      return;
    }
    qty++;
    myCart.push(item);
    totalSpent        += item.price;
    const prev         = billionaireWorth;
    billionaireWorth  -= item.price;
    animateBalance(prev, billionaireWorth);
    updateProgress();
    showToast(`${item.name} added!`, "success");

  } else if (isSell && qty > 0) {
    const idx = myCart.findLastIndex(i => i.id === id);
    if (idx === -1) return;
    qty--;
    myCart.splice(idx, 1);
    totalSpent        -= item.price;
    const prev         = billionaireWorth;
    billionaireWorth  += item.price;
    animateBalance(prev, billionaireWorth);
    updateProgress();
    showToast(`${item.name} removed.`, "info");
  }

  qtyInput.value = qty;
  refreshBuyButtons();
  updateCartSummary();
});

// Qty input — typed value handler
document.addEventListener("change", (e) => {
  if (!e.target.classList.contains("qty-input")) return;
  const card = e.target.closest(".product-info");
  if (!card) return;
  const id   = Number(card.dataset.id);
  const item = itens.find(i => i.id === id);
  if (!item) return;

  const isUnique   = UNIQUE_ITEMS.has(id);
  const currentQty = getQtyInCart(id);
  let   newQty     = Math.max(0, parseInt(e.target.value) || 0);
  if (isUnique) newQty = Math.min(newQty, 1);
  const diff = newQty - currentQty;

  if (diff > 0) {
    let bought = 0;
    const prevWorth = billionaireWorth;
    for (let i = 0; i < diff; i++) {
      if (billionaireWorth < item.price) { showToast("Not enough balance!", "error"); break; }
      myCart.push(item);
      totalSpent       += item.price;
      billionaireWorth -= item.price;
      bought++;
    }
    if (bought > 0) {
      animateBalance(prevWorth, billionaireWorth);
      updateProgress();
      showToast(`${bought}x ${item.name} added!`, "success");
    }
    e.target.value = currentQty + bought;
  } else if (diff < 0) {
    const toSell = -diff;
    let sold = 0;
    const prevWorth = billionaireWorth;
    for (let i = 0; i < toSell; i++) {
      const idx = myCart.findLastIndex(it => it.id === id);
      if (idx === -1) break;
      myCart.splice(idx, 1);
      totalSpent       -= item.price;
      billionaireWorth += item.price;
      sold++;
    }
    if (sold > 0) {
      animateBalance(prevWorth, billionaireWorth);
      updateProgress();
      showToast(`${sold}x ${item.name} removed.`, "info");
    }
    e.target.value = currentQty - sold;
  } else {
    e.target.value = currentQty;
  }

  refreshBuyButtons();
  updateCartSummary();
});

// â”€â”€â”€ Reset â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
document.getElementById("reset-btn")?.addEventListener("click", () => {
  const prev       = billionaireWorth;
  billionaireWorth = initialWorth;
  myCart           = [];
  totalSpent       = 0;
  animateBalance(prev, initialWorth);
  updateProgress();
  renderProducts(activeCategory);
  updateCartSummary();
  showToast("Reset! Start spending again.", "info");
});

// â”€â”€â”€ Init â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
window.addEventListener("DOMContentLoaded", () => {
  const name  = sessionStorage.getItem("billionaireName") || "elon";
  const worth = Number(sessionStorage.getItem("billionaireWorth") || "849000000000");
  billionaireWorth = worth;
  initialWorth     = worth;

  const imgMap  = { "elon": "elon.png", "jeff": "jeff.png", "MARK ZUCKERBERG": "marquinhos.png" };
  const nameMap = { "elon": "ELON MUSK", "jeff": "JEFF BEZOS", "MARK ZUCKERBERG": "MARK ZUCKERBERG" };

  const imgEl  = document.getElementById("billionaire-img");
  const nameEl = document.getElementById("billionaire-name");
  if (imgEl)  { imgEl.src = `assets/img/${imgMap[name] ?? "elon.png"}`; imgEl.alt = name; }
  if (nameEl)  nameEl.textContent = nameMap[name] ?? name.toUpperCase();

  updateBalance(billionaireWorth);
  updateProgress();
  buildFilters();
  renderProducts("all");
  updateCartSummary();
});

