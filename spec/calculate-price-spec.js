var AllBooks = require('./all-book.js');

describe('harry_potter test', function() {
  var CalculatePrice = require('../module/calculate-price.js');
  var allBooks = AllBooks();
  var calculatePrice = new CalculatePrice();

  it('should get correct kinds number', function() {
    var count = calculatePrice.getKindsNum(allBooks);
    expect(count).toBe(5);
  });

  it('should get correct single price', function() {
    var singlePrice = calculatePrice.getSinglePrice(5);
    expect(singlePrice).toBe(30.00);
  });

});
