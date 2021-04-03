import { Sorter } from "./sorter";
import { NumbersCollection } from "./numbers-collection";

const numbersCollection = new NumbersCollection([-10, 2, 4, -5, 6, -20,-22,100]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);

/* [-10, 2, 4, -5, 6, -20]
[-10, -1, 3, -20, 4, 6]
[-10, -1, -20, 3, 4, 6]
[-10, -20, -1, 3, 4, 6]
[-20, -10, -1, 3, 4, 6] */