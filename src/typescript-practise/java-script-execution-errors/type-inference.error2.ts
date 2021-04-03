class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  printName() {
    console.log(`Hi! I am ${this.firstName} ${this.lastName}`);
  }
}

let x: Person;
x = new Person("Ram", "Kumar")

x.printName();

let y = new Person(ram, kumar);
y.printName();

let z = new Person({ firstName: "ram" }, { lastName: "kumar" });
z.printName();