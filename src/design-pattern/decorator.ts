abstract class Car {
  public abstract description: string;
  public getDescription() {
    return this.description;
  }
  public abstract cost(): number;
}

abstract class CarOptions extends Car {
  abstract decoratedCar: Car;
  abstract decoratedCarDescription: string;
  public abstract getDescription(): string;
}

class ModelX extends Car {
  public description = "Model X";
  public cost(): number {
    return 70000;
  }
};

class ModelS extends Car {
  public description = "Model X";
  public cost(): number {
    return 80000;
  }
};

class AbsBrake extends CarOptions {
  public description: string;
  decoratedCarDescription = "AbsBrake";
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    if (!this.description) {
      this.description = `${this.decoratedCar.getDescription()}, ${this.decoratedCarDescription}`
    }
    return this.description;

  }

  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }

}

class AutoPilot extends CarOptions {
  public description: string;
  decoratedCarDescription = "AutoPilot";
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    console.log(car.description)
    this.decoratedCar = car; this
  }

  public getDescription(): string {
    if (!this.description) {
      this.description = `${this.decoratedCar.getDescription()}, ${this.decoratedCarDescription}`
    };
    return this.description;
  }

  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

let modelX = new ModelX();
console.log(modelX.getDescription());
console.log(modelX.cost());

modelX = new AbsBrake(modelX);
console.log(modelX.getDescription());
console.log(modelX.cost());

modelX = new AutoPilot(modelX);
console.log(modelX.getDescription());
console.log(modelX.cost());