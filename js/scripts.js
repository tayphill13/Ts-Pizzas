function  Pizza(toppings, size, price)  {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

Pizza.prototype.orderUp = function()  {
  return this.price + " dollar" + this.size + this.toppings;
}