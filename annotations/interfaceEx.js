var oldCivic = {
    name: 'civic',
    year: 2000,
    isBroken: false,
    noOfGear: 5,
    isSafety: true,
    summary: function () {
        return (" I am " + this.name);
    }
};
var printVehicle = function (vehicle) {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`isBroken: ${vehicle.isBroken}`);
    // console.log(`isBroken: ${vehicle.noOfGear}`);
    // console.log(`isBroken: ${vehicle.isSafety}`);
    console.log("vehicle.summary('heloo')");
    console.log(vehicle.summary('heloo'));
    // console.log(vehicle.summary({}));
    console.log(vehicle.summary('heloo'));
};
printVehicle(oldCivic);
