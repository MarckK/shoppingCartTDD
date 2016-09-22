//This works, but is awful to read!  Below is just nicer

//  var ShoppingCart = new Object();
// ShoppingCart.basket = [];
// ShoppingCart.addItem = function(item) {
//   if (arguments.length === 0) return this.basket;
//   this.basket.push(item);
//   return this.basket;
// }



var ShoppingCart = function() {
  this.basket = []
  this.total = 0
}

ShoppingCart.prototype.addItem = function (item) {
  if (arguments.length === 0) return this.basket;
  this.basket.push(item);
  return this.basket;
}



module.exports = ShoppingCart;
