interface vehicle {
    name: string,
    year: number,
    // isBroken: boolean,
    noOfGear: number,
    isSafety: boolean
    summary(greeting: string): string
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    isBroken: false,
    noOfGear: 5,
    isSafety: true,
    summary(): string {
        return (` I am ${this.name}`);
    }
};

const printVehicle = (vehicle: vehicle): void => {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`isBroken: ${vehicle.isBroken}`);
    // console.log(`isBroken: ${vehicle.noOfGear}`);
    // console.log(`isBroken: ${vehicle.isSafety}`);
    console.log(vehicle.summary('heloo'));
};

printVehicle(oldCivic);