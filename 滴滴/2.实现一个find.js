//实现find 函数，满足：
// 如 obj= {a:{b:{c:1}}};
// 输入find(obj,'a.b.c') 返回1；
// 输入find(obj,'a.c.c') 返回 undefined

function find(obj, str) {
  let arr = str.split(".");
  for (let i = 0; i < arr.length; i++) {
    let key = obj[arr[i]];
    if (!key) return undefined;

    if (typeof key !== "object" || key == null) return key;

    if (Array.isArray(key)) return key;

    return find(key, str.slice(i+1));
  }
}


let obj={a:{b:{c:1}}}

console.log(find(obj,'a.b.c'))