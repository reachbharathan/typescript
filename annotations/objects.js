var profile = {
    name: "john",
    dateOfBirth: 1980,
    age: -1,
    corordinates: {
        lat: 20,
        long: 30
    },
    setAge: function (dob) {
        this.age = 2020 - dob;
    }
};
console.log(profile.setAge(1989));
console.log(profile.age);
var age = profile.age;
var corordinates = profile.corordinates;
console.log("Age is " + age);
console.log("Age i1 " + corordinates.lat);
console.log("Age i2 " + corordinates.long);
