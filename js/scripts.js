function Pizza(topping, topping2, topping3, size, price) {
  this.topping = topping;
  this.topping2 = topping2;
  this.topping = topping3;
  this.size = size;
  this.price=price;
}

function formula(pizza) {
  if (pizza.size === "Small") {
    pizza.price -= 2;
  } else if(pizza.size === "Large") {
    pizza.price += 2;
  }
}
