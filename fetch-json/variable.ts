let apples: number = 5;
let checked: boolean = true;
let ageOfKids: number[] = [1, 2, 4, 5, 6];
let names: string[] = ['bharatha', 'karthiga', 'karthik'];

class Person {}

let personB: Person = new Person();

let dummyObject: { age: number; name: string } = {
  age: 10,
  name: 'bharath'
};

const logNumber: (i: number) => void = i => {
  console.log(i);
};

logNumber(1);
