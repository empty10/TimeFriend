function * read() {
      console.log(1);
      let a = yield 'zf';
      console.log(a);
      let b = yield 9;
      console.log(b);
      return b;
  }
  
  let it = read();
  console.log(it.next('213')); // {value:'zf',done:false}
