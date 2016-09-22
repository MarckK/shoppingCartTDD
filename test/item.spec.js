const expect = require("chai").expect //import chai
const Item = require("../src/item.js") //importing the Item obj

let item = new Item('banana', 60);

describe("item", () => {
  it ("Has a name property", () => {
    expect(item.name).to.equal('banana');
  });
  it ("Has a price property", () => {
    expect(item.price).to.equal(60);
  });
})
