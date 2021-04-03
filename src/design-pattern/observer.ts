interface Subject{
  registerObserver(o: Observer): void;
  deregisterObserver(o: Observer): void;
  notifyObservers(): void;
}

interface Observer{
  update(temperature: number): void;
}

class WeatherStation implements Subject
{
  private observers: Observer[] = [];
  private temperature: number;

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  deregisterObserver(o: Observer) {
    const observerIndex = this.observers.indexOf(o);
    if(observerIndex>=0){
      this.observers.splice(observerIndex,1);
    }
  }

  notifyObservers() {
    if(this.observers.length>0){
      console.log("Observers are present");
      for (let observer of this.observers) {
        observer.update(this.temperature);
      }
    }else{
      console.log("Observers are not present");
    }
    
  }

  setTemperature(temp: number){
    this.temperature = temp;
    console.log(`${this.temperature} is the current temperature in Singapore`)
    this.notifyObservers();
  }
}

class TemperatureDisplay implements Observer {
  private subject: Subject;

  constructor(weatherStation: WeatherStation){
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  update(temperature: number) {
    console.log(`The temperature in Temperaturedisplay is ${temperature}`)
  }
}

const weatherStation = new WeatherStation();
const temperatureDisplay = new TemperatureDisplay(weatherStation);
// weatherStation.registerObserver(temperatureDisplay);
weatherStation.setTemperature(38.5);
weatherStation.deregisterObserver(temperatureDisplay);
weatherStation.setTemperature(48.5);