//let value: string = "123";
let value: number = 123;
let fixedString: string = (<number>value).toFixed(4)
let fixedString1: string = (value as number).toFixed(4)



console.log(fixedString);
console.log(fixedString1);
