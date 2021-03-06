import { NumbersCollection } from "./numbers-collection"

export class Sorter {
  collection: NumbersCollection;
  constructor(collection: NumbersCollection) {
    this.collection = collection;
  }

  sort() {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}