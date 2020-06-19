// Business Logic
function Pizza()  {
  this.price = 0;
}
Pizza.prototype.sizePrice = function(size) {
  if  (size == "small")  {
    this.price += 6;
  }
  console.log(this.price);
}
Pizza.prototype.toppingsPrice = function(toppings) {
  if (toppings == "3")  {
    this.price += 3;
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
    orderTotalPrice = newOrder.total();
    
    $("#order-output").text(orderTotalPrice);
  });
  })