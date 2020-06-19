// Business Logic
function Pizza()  {
  this.price = 0;
}
Pizza.prototype.sizePrice = function(size) {
  if  (size === "small")  {
    this.price += 6;
  }
}
Pizza.prototype.toppingsPrice = function(toppings) {
  if (toppings === "pepperoni")  {
    this.price += 3;
  }
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
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    let size = $("#pizzaSize").val();
    let toppings = $("#pizzaToppings").val();
    let newOrder = new Pizza();
    Pizza.sizePrice(size);
    Pizza.toppingsPrice(toppings);
    let orderTotalPrice = newOrder.total();
    $("#order-output").text(orderTotalPrice);
    });
  })
})