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
console.log(profile.setAge(10));
console.log(profile.age);
console.log(profile);
