// var a=0,b=0;
// function A(a){
// A = function(b){
//        console.log(a+b++); 
// }
// console.log(a++);
// }
// A(1); 
// A(2); 


var a = 10;
(function () {
    console.log(a)
    a = 5
    console.log(window.a)
    var a = 20;
    console.log(a)
})()
