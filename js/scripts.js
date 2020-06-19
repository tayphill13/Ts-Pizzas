// Business Logic
function PizzaOrder()  {
  this.price = 0;
}
PizzaOrder.prototype.sizePrice = function(size) {
  if  (size === "small")  {
    this.price += 6;
  }
}
PizzaOrder.prototype.toppingsPrice = function(toppings) {
  if (toppings === "pepperoni")  {
    this.price += 3;
  }
}
PizzaOrder.prototype.total = function() {
  let total = this.price;
  return total;
}
// PizzaOrder.prototype.orderUp = function()  {
//   return this.size + this.toppings + " is ready!";
// }


// User Interface
$(document).ready(function()  {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    let size = $("#pizzaSize").val();
    let newOrder = new PizzaOrder();
    PizzaOrder.sizePrice(size);
    let orderTotalPrice = newOrder.total();
    $("#order-output").text(orderTotalPrice);
  })
})