// set 它类似于数组，但是成员的值都是唯一的，没有重复的值。
// map object 提供的“字符串->值”的数据结构，map 提供了“值-》值”的数据结构


function test(person) {
    person.age = 26
    person = {
      name: 'hzj',
      age: 18
    }
    return person
  }
  const p1 = {
    name: 'fyq',
    age: 19
  }
  const p2 = test(p1)
  
console.log(p1)
console.log(p2)