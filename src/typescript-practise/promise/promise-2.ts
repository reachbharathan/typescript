const one = new Promise<number>((resolve, reject) => { resolve(123) });

const two = one.then(value => {
  console.log('resolved', value);
  return value;
});

console.log(two)
console.log(two)
console.log(two)
// if(one != two) {
//   console.log('true')

// }