export let myCart = [];
export let total = 0;


async function addItemToCart(item) {
  myCart.push(item);
  total += item.price;
//   updateCartDisplay();
}

async function deleteItem(userCart, name){
  const index = userCart.findIndex((item) => item.name === name);
  if( index !== -1){
    userCart.splice(index, 1);
  }
}
async function sumItens(myCart){
    let total=0;
    for(let i=0; i<myCart.length;i++){
        total += myCart[i].price;
    }
    return total;
}

export { addItemToCart, deleteItem, sumItens };