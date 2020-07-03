// simple variables
var apples = 5;
var checked = true;
var ageOfKids = [1, 2, 4, 5, 6];
var names = ['bharatha', 'karthiga', 'karthik'];
//class
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    return Person1;
}());
var person1B = new Person1();
var dummyObject = {
    age: 10,
    name: 'bharath'
};
var logNumber = function (i) {
    console.log(i);
};
// logNumber(1);
var fruits = [1, 'orange', true];
var word;
for (var index = 0; index < fruits.length; index++) {
    if (fruits[index] === true) {
        word = index;
    }
}
// console.log(word);
var todayWeather = { date: new Date(), weather: 'sunny' };
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date + "11");
    console.log(weather);
};
logWeather(todayWeather);
