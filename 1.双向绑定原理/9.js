// 实现一个add函数，满足add(1)(2)(3)


function add(a){
    return function (b){
        return function (c){
            return a+b+c
        }
    }
}

let p= add(1)(2)(3);
console.log(p)