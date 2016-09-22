const expect = require("chai").expect //import chai
const ShoppingCart = require("../src/shoppingCart.js") //importing the ShoppingCart obj
const Item = require("../src/item.js")

describe("Shopping Cart", () => {
  let shoppingCart;

  beforeEach(() => {
    shoppingCart = new ShoppingCart();
  });

  context("No items in basket", () => {
    it ("Has no items", () => {
      expect(shoppingCart.basket).to.eql([]);
    });
    it ("Has a total of zero", () => {
      expect(shoppingCart.total).to.eql(0);
    });
  });

  describe("addItem", () => {
    it ("Added one item", () => {
      shoppingCart.addItem('banana');
      expect(shoppingCart.basket).to.eql(['banana']);
    });
    it ("Added one banana", () => {
      let banana = new Item('banana', 60);
      shoppingCart.addItem(banana);
      expect(shoppingCart.basket).to.eql([banana]);
    });
  });

  describe("sumTotal", () => {
    it ("Summed total in shopping cart", () => {
      let apple = new Item('apple', 80);
      shoppingCart.addItem(apple);
      shoppingCart.sumTotal();
      expect(shoppingCart.total).to.eql(80);
    });
    it ("Summed total in shopping cart", () => {
      let apple = new Item('apple', 80);
      let banana = new Item('banana', 40);
      shoppingCart.addItem(apple);
      shoppingCart.addItem(banana);
      shoppingCart.sumTotal();
      expect(shoppingCart.total).to.eql(120);
    });
  });
})
