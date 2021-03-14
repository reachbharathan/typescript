console.log("before the function")
async function myFunction1() {
  console.log("before the promise 1");
  var result = await new Promise<number>((resolve, reject) => {
    resolve(1);
  });
  console.log("after the promise 1");
  return result;
}

function myFunction2() {
  console.log("before the promise 2");
  var result = new Promise((resolve, reject) => {
    resolve(1);
  });
  console.log("after the promise 2");
  return result;
}

// myFunction1();
myFunction1().then(res => console.log(res));
myFunction2().then(res => console.log(res));

console.log("after the function");