let obj = {
  name: {
    firstName: "F",
    lastName: "Z",
  },
  age: 10,
};

let handler = {
  get(target, key) {
    console.log("收集依赖1");
    if (typeof target[key] === "object" && target[key] !== null) {
      return new Proxy(target[key], handler);
    }
    console.log("收集依赖2");
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    console.log("设置");
    return Reflect.set(target, key, value);
  },
};

let proxy = new Proxy(obj, handler);
// console.log(proxy.name.firstName)
proxy.name.firstName = "s";
