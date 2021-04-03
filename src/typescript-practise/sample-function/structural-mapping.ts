// typescript structural mapping
// mapped to employee.ts
import Employee from './employee';

let qa = {
  title: "QA",
  role: "testing",
  organization: "thoughtworks"
}

let bharath: Employee = qa;

console.log(bharath);

