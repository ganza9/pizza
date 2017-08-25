function Pizza(topping1, topping2, topping3, size, price) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size;
  this.price=price;
}

// function formula(pizzaSize) {
  if (pizza.size === "Small") {
    pizza.price -= 3;
  } else if(pizza.size === "Large") {
    pizza.price += 3;
  }
// }

// function formula(pizzaTopping) {
  if (pizza.topping === "Anchovy") {
    pizza.price += 2;
  }
// }

$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();

    var topping1 = $("#topping1 option:selected").text();
    var topping2 = $("#topping2 option:selected").text();
    var topping3 = $("#topping3 option:selected").text();
    var size = $("#size option:selected").text();
    var price = 15;
    var buyPizza = new Pizza(topping1, topping2, topping3, size, price);

    price = formula(buyPizza);

    $("#topping1Out").text(buyPizza.topping1);
    $("#topping2Out").text(buyPizza.topping2);
    $("#topping3Out").text(buyPizza.topping3);
    $("#sizeOut").text(buyPizza.size);
    $("#priceOut").text(buyPizza.price);

    $(".table").show()
  });
});
