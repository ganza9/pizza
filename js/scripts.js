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

$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();

    var topping = $("#topping option:selected").text();
    var topping2 = $("#topping2 option:selected").text();
    var topping3 = $("#topping3 option:selected").text();
    var size = $("#size option:selected").text();
    var price = 15;
    var buyPizza = new Pizza(topping, topping2, topping3, size, price);

    price = formula(buyPizza);

    $("#toppingOut").text(buyPizza.topping);
    $("#topping2Out").text(buyPizza.topping2);
    $("#topping3Out").text(buyPizza.topping3);
    $("#sizeOut").text(buyPizza.size);
    $("#priceOut").text(buyPizza.price);

    $(".table").show()
  });
});
