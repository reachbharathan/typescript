let square = (x: number): number => x * x;
let addLambda = (a: number, b: number): number => (a + b);
let greeting = (name): string => {
  console.log(name);
  return "hi"
}

const logMessage = (message: string): void => {
  console.log(message);
}

const logError = (error: string): void => {
  console.error(error)
}

let logger: (value: string) => void;

if (10 > 20) {
  logger = logError;
  logger("Error message");
} else {
  logger = logMessage;
  logger("Log message")
}