let min: number, max: number;
let inputArray: number[];
let input: string = "5 2 4 3 1";

inputArray = input.split(" ").map(i => parseInt(i,10));
inputArray.sort((a,b) => a-b);
console.log(inputArray);

let temp = inputArray.slice(1);
console.log(temp);