// Business Logic
function PizzaOrder()  {
  this.price = 0;
}
PizzaOrder.prototype.sizePrice = function(size) {
  if  (size === "small")  {
    this.price += 6;
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
    let newOrder = new PizzaOrder();

    let orderTotalPrice = newOrder.total();
    $("#order-output").text(orderTotalPrice);
  })
})