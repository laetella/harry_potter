function CalculatePrice(allBooks) {
  this.allBooks = allBooks;
  this.keyArray = Object.keys(this.allBooks);
  this.kinds = this.getKindsNum();
  this.groups = this.getGroupsNum();
  // this.allPrice = [];
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

CalculatePrice.prototype.getSubTotalPrice = function(allBooks,method) {
  var count = 0;
  var tempBooks = allBooks;
  for (var each = 0; each < 5 - method; each++) {
    if (tempBooks[this.keyArray[each]] > 0) {
      tempBooks[this.keyArray[each]]--;
      count++;
    } else {
      break;
    }
  }
  return this.getSinglePrice(count);
};

CalculatePrice.prototype.getTotalPrice = function(allBooks,method) {
  var sum = 0;
  for (var item = 0; item < this.groups; item++) {
    sum += this.getSubTotalPrice(allBooks,method);
  }
  return sum;
};

CalculatePrice.prototype.getAllPrice = function(allBooks) {
  var allPrice = [];
  for (var method = 0; method < this.groups; method++) {
    var tempBooks = this.allBooks;
    console.log(this.allBooks);
    kindSum = this.getTotalPrice(tempBooks,method);
    allPrice.push(kindSum);
  }
  return allPrice;
};

CalculatePrice.prototype.getLowestPrice = function(allBooks) {
  var allPrice = this.getAllPrice(allBooks);
  console.log(allPrice);
  var lowestPrice = allPrice[0];
  for (var each = 1; each < allPrice.length; each++) {
    if (allPrice[each] < lowestPrice) {
      lowestPrice = allPrice[each];
    }
  }
  return lowestPrice;
}

module.exports = CalculatePrice;
