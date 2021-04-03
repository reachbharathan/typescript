class Person2 {
  public name: string;
  constructor(name:string){
    this.name = name;
  }
}

class Employee2 extends Person2 {
  private department: string;
  constructor(name:string, department: string){
    super(name);
    this.department = department
  }

  public elevatorPitch(){
    return `Hi! I am ${this.name}, I am from ${this.department}`
  }
}

let bharath = new Employee2("Bharath", "QA");
// console.log(bharath.department);
console.log(bharath.name);

console.log(bharath.elevatorPitch());
