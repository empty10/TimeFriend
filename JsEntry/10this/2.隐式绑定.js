//1
function foo() {
  console.log(this.a);
}
var obj = { a: 2, foo: foo };
obj.foo(); // 2

//2、调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含
function foo() {
  console.log(this.a);
}
var obj = { a: 2, foo: foo };
var bar = obj.foo; //虽然 bar是 obj.foo 的一个引用，但是实际上，它引用的是 foo 函数本身
var a = 20;
bar(); //20

//3，传递参数 是隐式赋值
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  fn();  
};  
var obj = { a: 2, foo: foo };
var a = "oops, global"; // a 是全局对象的属性
doFoo(obj.foo); // oops， global
