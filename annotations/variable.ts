// simple variables
let apples: number = 5;
let checked: boolean = true;
let ageOfKids: number[] = [1, 2, 4, 5, 6];
let names: string[] = ['bharatha', 'karthiga', 'karthik'];

//class
class Person1 {}

let person1B: Person1 = new Person1();

let dummyObject: { age: number; name: string } = {
  age: 10,
  name: 'bharath'
};

const logNumber: (i: number) => void = i => {
  console.log(i);
};

// logNumber(1);

const fruits = [1, 'orange', true];
let word: boolean | string | number;

for (let index = 0; index < fruits.length; index++) {
  if (fruits[index] === true) {
    word = index;
  }
}

// console.log(word);

const todayWeather = { date: new Date(), weather: 'sunny' };

const logWeather = ({date, weather}:{date:Date,weather: string}):void => {
  console.log(date + "11");
  console.log(weather);
};

logWeather(todayWeather);

















