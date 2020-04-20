// let a = '11';

// console.log(a == 1 && a == 2);

var A= function(){ this.value =1};
A.prototype.value=2;
var a = new A ();
var b = {value :4};
var B = A.bind(b);
var c = {value:5};
var C = B.bind(c);
var value =3;

A();
B();
C();

console.log(value);
console.log(a.value);
console.log(b.value);
console.log(c.value);