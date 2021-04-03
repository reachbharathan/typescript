import { AssertionError } from "assert";

const promise = new Promise((resolve, reject) => {
  new Error()
  resolve(3)
  reject(new Error("Manual2"))
});
promise.then((result) => {
  console.log(result)
})


promise.catch((err) => {
  console.log(err);
});