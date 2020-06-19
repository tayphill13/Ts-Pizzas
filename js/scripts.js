// Business Logic
function Pizza()  {
  this.toppings = [];
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
  if (toppings === "pepperoni" && toppings === "pineapple")  {
    this.price += 4;
  } else if (toppings === "pepperoni" || toppings === "pineapple")  {
    this.price += 2;
  }
  console.log(this.price);
}
Pizza.prototype.total = function() {
  let total = this.price;
  return total;
}
// PizzaOrder.prototype.orderUp = function()  {
//   return this.size + this.toppings + " is ready!";
// }


// User Interface
$(document).ready(function()  {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    let newOrder = new Pizza();
    let size = $("#pizzaSize").val();
    let toppings = $("#toppings").val();
    newOrder.sizePrice(size);
    newOrder.toppingsPrice(toppings);
    orderTotalPrice = newOrder.total();
    
    $("#order-output").text(orderTotalPrice);
  });
  })