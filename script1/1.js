'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 25 / 100);
};

const product1 = new Product('Товар 1', 1000);
product1.make25PercentDiscount();

console.log(product1);

// Пробовал еще вот так. Как на уроке. 
// 'use strict'
//
//function Product(name, price) {
//   this.name = name;
//   this.price = price;
//   this.make25PercentDiscount = function (discount) {
//      this.price = this price - (this.price/ 100*discount);
//};
//}
//      count products = [
//             new Product ('товар1', 100),
//             new Product ('товар2', 200),
//             new Product ('товар3', 300)
//];
//  for (let product of products) {
//       product.make25PercentDiscount(25);
//}
// console.log (products);