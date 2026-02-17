import * as cartService from './cart/cartFunctions.js';

let escolhaUsuario = null;
const myCart=[];
let total=0;
const itens=[
  {name: "lamborghini", price: 1435873},
  {name: "ferrari", price: 400000},
  {name: "mansion", price: 2000000},  
]
cartService.addItemToCart(itens[0]);
console.log("Item adicionado:", itens[0]);
cartService.addItemToCart(itens[1]);
console.log("Item adicionado:", itens[1]);
cartService.addItemToCart(itens[2]);
console.log("Item adicionado:", itens[2]);

console.log("Carrinho atual:", cartService.myCart);
console.log("Total atual:", cartService.total);
// Seleciona todos os botões "click"
document.querySelectorAll('.btn-click').forEach(button => {
  button.addEventListener('click', function() {
    // Encontra o card mais próximo (pai com classe billionaire-card)
    const card = this.closest('.billionaire-card');
    
    // Pega o nome do bilionário do atributo data-name
    escolhaUsuario = card.getAttribute('data-name');

    console.log('Você escolheu:', escolhaUsuario);
    // alert(`Você escolheu: ${escolhaUsuario}`);
    location.href = "spendMoney.html";
    //// muda para a página que gasta dinheirooosss
    // location.href = 'https://www.youtube.com/watch?v=GcAsY7xQHb0&list=RDGcAsY7xQHb0&start_radio=1';
  });
});


export { escolhaUsuario, myCart, total };