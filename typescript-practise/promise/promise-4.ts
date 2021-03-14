let promise = new Promise<number>(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then( res => {
  console.log(res);
  return res;
})

promise.then( (res:number) => {
  console.log(res*2);
})

