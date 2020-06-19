// Business Logic
function Pizza()  {
  this.price = 0;
}
Pizza.prototype.sizePrice = function(size) {
  if  (size === "small")  {
    this.price += 6;
  } else if (size === "medium") {
    this.price += 8;
  } else if (size === "large")  {
    this.price += 10;
  } return this.price;
}

Pizza.prototype.toppingsPrice = function(toppings) {
  if (toppings === "pepperoni")  {
    this.price += 2;
  } else if (toppings === "pepperoni" || toppings === "pineapple")  {
    this.price += 2;
  }
  console.log(this.price);
}
Pizza.prototype.total = function() {
  let total = this.price;
  return total;
}


// User Interface
$(document).ready(function()  {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    let newOrder = new Pizza();
    let size = $("#pizzaSize").val();
    let pepToppings = $("#toppings1").val();
    let pineappleToppings = $("#toppings2").val();
    newOrder.sizePrice(size);
    newOrder.toppingsPrice(pepToppings);
    newOrder.toppingsPrice(pineappleToppings);
    orderTotalPrice = newOrder.total();
    
    $("#order-output").text("$ " + orderTotalPrice + " pizza is hot and ready!");
  });
  })