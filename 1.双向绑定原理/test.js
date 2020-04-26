// 实现一个函数 find(obj, str)，满足:
// 如var obj = {a:{b:{c:1}}};
// var obj2 = {d:{e:{f:2}}}
// find(obj, 'a.b.c') // 返回1
// find(obj, 'a.d.c') // 返回undefined
// find(obj2, 'd')    // 返回{e:{f:2}}
// find(obj2, 'd.e.f') // 返回2

function find(obj, str) {
  let arr = str.split(".");
  let keys = Object.keys(obj);
  for (let i = 0; i < arr.length; i++) {
    if (!keys[arr[i]]) {
      return undefined;
    }
    if (typeof keys[arr[i]] === "object" && keys[arr[i]] !== null) {
      return find(keys[arr[i]], arr.slice(i).join("."));
    }
    return keys[arr[i]];
  }
}

