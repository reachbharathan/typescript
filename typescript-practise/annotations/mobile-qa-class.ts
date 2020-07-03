import QA from "./qa-class";

class MobileQA extends QA{
  tool: string;
  sayHi():void {
    console.log("Hi");
    console.log(`I am ${this.name}`);
    console.log(`I am a ${this.title}`);
  }
}

let bharath = new MobileQA();
bharath.name = "Bharath"
bharath.department = "Testing"
bharath.title = "Consultant"
bharath.tool = "VS Code"
bharath.sayHi();
console.log(bharath.department);
