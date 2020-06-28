// Business Logic
function Pizza()  {
  this.price = 6;
}
Pizza.prototype.sizePrice = function(size) {
  if  (size === "medium")  {
    this.price += 2;
  } else if (size === "large") {
    this.price += 4;
  } return this.price;
}
Pizza.prototype.toppingsPrice = function(toppings) {
  if (toppings === "pepperoni") {
    this.price += 3;
  } else if (toppings === "peppers")  {
    this.price += 1;
  } else if (toppings === "pineapple")  {
    this.price += 2;
  }
}
Pizza.prototype.total = function() {
  let total = this.price;
  return total;
}
// User Interface
$(document).ready(function()  {
  $("#orderForm").submit(function(event) {
    $('#orderUp').show();
    event.preventDefault();
    let newOrder = new Pizza();
    let size = $("#pizzaSize").val();
    newOrder.sizePrice(size);
    $("input:checkbox[name=toppings]:checked").each(function() {
      let addedToppings = $(this).val();
      newOrder.toppingsPrice(addedToppings);
    });
    orderTotalPrice = newOrder.total();
    $("#order-output").text("$" + orderTotalPrice + " " + size + " pizza is hot and ready!");
  });
})