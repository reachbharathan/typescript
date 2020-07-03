import { Person, Result } from "./result"

let myResult: Result = {
  playerName: "Bharath",
  score: 3,
  problemCount: 2,
  factor: 2
};

let bharath: Person = {
  firstName: "Bharathan",
  lastName: "Kumaran",
  age: 30,
  formatName: function (){
    console.log(this.firstName + " " + this.lastName);
    return this.firstName + " " + this.lastName;
  },
}

bharath.formatName()