var a = 10;
var b = 20;

console.log("Sum of two number is=", a + b);
console.log("multiplication of two number is =", a * b);

//Discount=(list price-selling price)/list price*100

var sellingPrice = 199;
var listPrice = 799;
var discountPrice = ((listPrice - sellingPrice) / listPrice) * 100;
console.log("Discount Percentage is :", discountPrice);

displayDiscountPercentage = Math.round(discountPrice);
console.log(displayDiscountPercentage + " %off");
