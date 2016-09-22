
var ShoppingCart = function() {
  this.basket = []
  this.total = 0
}

ShoppingCart.prototype.addItem = function (item) {
  if (arguments.length === 0) return this.basket;
  this.basket.push(item);
  return this.basket;
}

ShoppingCart.prototype.sumTotal = function() {
  if (this.basket.length === 0) return 0;
  for(let i = 0; i < this.basket.length; i++) {
    let valueinBasket = this.basket[i]['price'];
  	this.total += valueinBasket;
  }
  return this.total;
}


module.exports = ShoppingCart;
