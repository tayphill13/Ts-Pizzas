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
  if (toppings !== "pepperoni" || "pineapple")  {
    return this.price;
  } else if (toppings === "pineapple")  {
    this.price += 2;
  } else if (toppings === "pepperoni" && toppings === "pineapple")  {
    this.price += 4;
  } else if (toppings === "pepperoni")  {
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
    event.preventDefault();
    let newOrder = new Pizza();
    let size = $("#pizzaSize").val();
    let pepperoniTopping = $("#toppings1").val();
    let pineappleTopping = $("#toppings2").val();
    newOrder.sizePrice(size);
    $("input:checkbox[name=toppings]:checked").each(function() {
      let addedToppings = $(this).val();
      newOrder.toppingsPrice(addedToppings);
      console.log(addedToppings)
    });
    newOrder.toppingsPrice(pepperoniTopping);
    newOrder.toppingsPrice(pineappleTopping);
    orderTotalPrice = newOrder.total();
    
    $("#order-output").text("$ " + orderTotalPrice + " pizza is hot and ready!");
  });
  })