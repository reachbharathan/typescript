function add(a, b) {
  // try {
  //   if (isNaN(a) || isNaN(b)) {
  //     throw "Parameter is not a number";
  //   }
    return a + b;
  // } catch (error) {
  //   console.error(error);
  // }
}

console.log(add(1, 2));
console.log(add(1, "passing a string"));
console.log(add(1, {}));
