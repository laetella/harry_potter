function CalculatePrice() {

}

CalculatePrice.prototype.getKindsNum = function(allBooks) {
  var kinds = 0;
  for(var keys in allBooks) {
    kinds ++;
  }
  return kinds;
}

CalculatePrice.prototype.getSinglePrice = function(kind) {
  var discount = 0;
  switch (kind) {
    case 1:
      discount = 0;
      break;
    case 2:
      discount = 0.4;
      break;
    case 3:
      discount = 0.8;
      break;
    case 4:
      discount = 1.6;
      break;
    case 5:
      discount = 2.0;
      break;
  }
  return kind * (8.00 - discount);
};

module.exports = CalculatePrice;
