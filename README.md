关于实现的基本设计:

所有的书用键值对的形式表示(即 书名:数量) 书名分别为first,second...

all-book.js 类似于一个basket， 返回所有要买的书.

calculate-price类 只有一个职责,即用来计算价格.

因为会有多种打折方式,所以计算出的价格会有多种,用getLowestPrice()来得到最后需要的价格.

可以用一个数组(allPrice)来存放所有可能的价格.

用getAllPrice()方法来为数组增加元素,即将每一种可能的价格放入该数组中.

计算每一种可能的价格都需要调用函数getTotalPrice().

getSubTotalPrice()用来计算一种情况下 每一组的价格 ,同时将该组的书的种数改变(因为每计算一次,就需要把已经计算过的书的数量减一)

关于测试:

calculate-price-spec.js 用来测试计算价格类的计算结果是否正确。

第一步先测试书的种类(getKindsNum())及不同group的书的价格计算(getSinglePrice())是否正确.

先求出共有多少组(即为书的种数的本数的最大值)getGroupsNum(),即有多少个可能的价格.

在测试getTotalPrice()和getSubTotalPrice()时,因为存在调用关系和值的改变,所以不能同时测试.

To try and encourage more sales of the 5 different Harry Potter books they sell, a bookshop has decided to offer discounts of multiple-book purchases.

One copy of any of the five books costs 8 EUR.

If, however, you buy two different books, you get a 5% discount on those two books.

If you buy 3 different books, you get a 10% discount.

If you buy 4 different books, you get a 20% discount.

If you go the whole hog, and buy all 5, you get a huge 25% discount.

Note that if you buy, say, four books, of which 3 are different titles, you get a 10% discount on the 3 that form part of a set, but the fourth book still costs 8 EUR.

Your mission is to write a piece of code to calculate the price of any conceivable shopping basket (containing only Harry Potter books), giving as big a discount as possible.

For example, how much does this basket of books cost?

2 copies of the first book
2 copies of the second book
2 copies of the third book
1 copy of the fourth book
1 copy of the fifth book

One way of group these 8 books is:

 1 group of 5 --> 25% discount (1st,2nd,3rd,4th,5th)
+1 group of 3 --> 10% discount (1st,2nd,3rd)

This would give a total of

 5 books at a 25% discount
+3 books at a 10% discount

Giving

 5 x (8 - 2.00) == 5 x 6.00 == 30.00
+3 x (8 - 0.80) == 3 x 7.20 == 21.60

For a total of 51.60

However, a different way to group these 8 books is:

 1 group of 4 books --> 20% discount  (1st,2nd,3rd,4th)
+1 group of 4 books --> 20% discount  (1st,2nd,3rd,5th)

This would give a total of

 4 books at a 20% discount
+4 books at a 20% discount

Giving

 4 x (8-1.60) == 4 x 6.40 == 25.60
+4 x (8-1.60) == 4 x 6.40 == 25.60

For a total of 51.20

And 51.20 is the price with the biggest discount.
