function CalculatePrice(allBooks) {
  this.allBooks = allBooks;
  this.keyArray = Object.keys(this.allBooks);
  this.kinds = this.getKindsNum();
  this.groups = this.getGroupsNum();
  this.allPrice = [];
}

CalculatePrice.prototype.getKindsNum = function() {
  var kinds = 0;
  for (var item = 0; item < this.keyArray.length; item++) {
    if (this.allBooks[this.keyArray[item]] !== 0) {
      kinds++;
    }
  }
  return kinds;
};

CalculatePrice.prototype.getGroupsNum = function() {
  var groups = this.allBooks[this.keyArray[0]];
  for (var group = 1; group < this.kinds; group++) {
    if (this.allBooks[this.keyArray[group]] !== 0) {
      if (this.allBooks[this.keyArray[group]] > groups) {
        groups = this.allBooks[this.keyArray[group]];
      }
    }
  }
  return groups;
};

CalculatePrice.prototype.getSinglePrice = function(kinds) {
  var discount = 0;
  switch (kinds) {
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
  return kinds * (8.00 - discount);
};

CalculatePrice.prototype.getSubTotalPrice = function(kinds) {
  var subTotal = this.getSinglePrice(kinds);
  for (var kind = this.kinds; kind > 0; kind--) {
    this.allBooks[this.keyArray[kind]]--;
  }
  return subTotal;
};

CalculatePrice.prototype.getTotalPrice = function(allBooks) {
  var sum = 0;
  for (var each = 0; each < this.groups; each++) {
    sum += this.getSubTotalPrice(this.getKindsNum());
  }
  return sum;
};

module.exports = CalculatePrice;
