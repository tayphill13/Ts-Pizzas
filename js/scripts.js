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
  } 
  return this.price -= 6;
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
    let pepperoniTopping = $("#pepperoni").val();
    let pineappleTopping = $("#pineapple").val();
    let peppersTopping = $("#peppers").val();
    newOrder.sizePrice(size);
    $("input:checkbox[name=toppings]:checked").each(function() {
      let addedToppings = $(this).val();
      newOrder.toppingsPrice(addedToppings);
    });
    newOrder.toppingsPrice(pepperoniTopping);
    newOrder.toppingsPrice(pineappleTopping);
    newOrder.toppingsPrice(peppersTopping);
    orderTotalPrice = newOrder.total();
    $("#order-output").text("$" + orderTotalPrice + " " + size + " pizza is hot and ready!");
  });
  })