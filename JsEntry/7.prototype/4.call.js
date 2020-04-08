//call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

//call函数 特点 1)可以改变我们当前函数的this指向。   2）还会让当前函数执行

Function.prototype.myCall = function(content=window){
    content.fn = this;
    let args = [...arguments].slice(1);
    let result = content.fn(...args);
    delete content
    return result
}

//-----------------
function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    console.log(this.constructor)
    Product.myCall(this, name, price);
    this.category = 'food';
  }

  let f= new Food('apple',10)
  console.log(f.price)





