let square = x => x * x;
let add =  (a,b) => (a + b);
let greeting = (name) => console.log(name);


console.log(square(5));
console.log(square("5"));
console.log(square("5a"));

console.log("4:" + add(3,2));
console.log("5:" + add("3","2"));
console.log("6:" + add("3a","2b"));
