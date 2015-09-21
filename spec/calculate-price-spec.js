var AllBooks = require('./all-book.js');

describe('harry_potter test', function() {
  var CalculatePrice = require('../module/calculate-price.js');
  var allBooks = AllBooks();
  var calculatePrice = new CalculatePrice(allBooks);

  it('should get correct kinds number', function() {
    var count = calculatePrice.getKindsNum(allBooks);
    expect(count).toBe(5);
  });

  it('should get correct groups number', function() {
    var groups = calculatePrice.getGroupsNum(allBooks);
    expect(groups).toBe(2);
  });

  it('should get correct single price', function() {
    var singlePrice = calculatePrice.getSinglePrice(5);
    expect(singlePrice).toBe(30.00);
  });

  // it('should get correct sub total price', function() {
  //   var totalPrice = calculatePrice.getSubTotalPrice(3);
  //   expect(totalPrice).toBe(21.60);
  // });

  it('should get correct total price', function() {
    var totalPrice = calculatePrice.getTotalPrice(allBooks,0);
    expect(totalPrice).toBe(51.60);
  });

  it('should get correct lowest price', function() {
    var totalPrice = calculatePrice.getLowestPrice(allBooks);
    expect(totalPrice).toBe(51.20);
  });

});
