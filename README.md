# 💸 Spend a Billionaire's Money

Um jogo interativo onde você escolhe um bilionário e tenta gastar toda a fortuna dele comprando itens de luxo — sem gastar dinheiro real.

---

## 🎯 Inspiração

Este projeto é inspirado no site **[Neal.fun/spend](https://neal.fun/spend/)**, criado por **Neal Agarwal**. O original permite ao usuário gastar a fortuna de Jeff Bezos em itens do dia a dia até bens luxuosos, dando uma noção visual do quão absurda é a riqueza de um bilionário.

Nosso projeto expande a ideia com múltiplos bilionários para escolher, filtros por categoria, sistema de carrinho, notificações e outras melhorias de UX.

---

## 🚀 Como rodar

O projeto é 100% front-end (HTML, CSS, JS puro). Basta servir os arquivos com qualquer servidor local.

**Com XAMPP:**
1. Coloque a pasta em `htdocs/`
2. Inicie o Apache no painel do XAMPP
3. Acesse `http://localhost/SPEND-BILLIONER-S-MONEY/`

**Com Live Server (VS Code):**
1. Abra a pasta no VS Code
2. Clique com o botão direito em `index.html` → *Open with Live Server*

---

## 🧭 Como jogar

1. Na tela inicial, passe o mouse sobre um card para ver o perfil do bilionário
2. Clique em **START SPENDING** para entrar na tela de compras
3. Use os filtros de categoria para navegar pelos itens
4. Clique em **+** para comprar, **−** para vender, ou digite a quantidade diretamente no campo
5. Acompanhe o saldo restante e a barra de progresso no topo
6. O resumo de compras fica no final da página
7. Use **Reset** para recomeçar do zero

---

## ✨ Features

- **3 bilionários** — Elon Musk ($849B), Mark Zuckerberg ($232B), Jeff Bezos ($222.9B)
- **18 itens** em 9 categorias: Streaming, Tech, Lifestyle, Cars, Aviation, Nautical, Collectibles, Real Estate e Sports
- **Filtro por categoria** com pills horizontais
- **Input de quantidade** — digite diretamente o número desejado
- **Barra de progresso** mostrando a % da fortuna gasta
- **Animação do saldo** a cada compra/venda
- **Toast notifications** (máximo de 4 visíveis por vez)
- **Itens únicos** — alguns itens (obras de arte, times de futebol etc.) só podem ser comprados uma vez
- **Botão Reset** para zerar tudo e recomeçar
- **Design responsivo** para mobile e desktop

---

## 🗂️ Estrutura do projeto

```
SPEND-BILLIONER-S-MONEY/
├── index.html          # Tela de seleção do bilionário
├── spendMoney.html     # Tela de compras
├── assets/
│   ├── css/
│   │   └── global.css  # Estilos da tela inicial
│   └── img/            # Imagens dos bilionários e produtos
└── src/
    └── js/
        ├── main.js             # Lógica principal (produtos, carrinho, filtros)
        └── cart/
            └── cartFunctions.js
```

---

## 🛠️ Tecnologias

- **HTML5** + **CSS3** (Grid, Flexbox, CSS Variables, Glassmorphism)
- **JavaScript** puro (ES Modules, `sessionStorage`)


---

## 📝 Créditos

| | |
|---|---|
| Inspiração original | [Neal.fun/spend](https://neal.fun/spend/) por **Neal Agarwal** |
| Desenvolvido por | **JNETO10** |
