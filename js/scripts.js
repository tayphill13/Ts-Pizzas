// Business Logic
function  Pizza(toppings, size,)  {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.orderUp = function()  {
  return this.size + this.toppings + " is ready!";
}

function Order()  {
  this.price = 0;
}

// User Interface
$(document).ready(function()  {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    let inputtedSize = $("input#pizzaSize").val();
    let inputtedToppings =  $("input#toppings").val();
    let newOrder = new Pizza(inputtedSize, inputtedToppings);
    $("#order-output").text(newOrder);
  })
})