let firstName = "global firstname";
let lastName = "global lastname";

let bharath = {
  firstName: 'Bharathan',
  lastName: 'Kumaran',
  age: 30,
  formatName: function(){
    console.log(this.firstName + ' ' + this.lastName);
    return this.firstName + ' ' + this.lastName;
  },
  formatName2: () => {
    console.log(firstName + ' ' + lastName);
  },
};

console.log(bharath.firstName);
console.log(bharath.lastName);

bharath.formatName();
bharath.formatName2();

var person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

