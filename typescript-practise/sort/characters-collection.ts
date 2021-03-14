export class CharactersCollection {
  data: string;
  length: number;
  characters: string[];
  dummy: number;

  constructor(data: string) {
    this.data = data;
    this.characters = data.split('');
    this.length = data.length;
    this.dummy = data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.characters[leftIndex].toLocaleLowerCase() > this.characters[rightIndex].toLocaleLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.characters[leftIndex];
    this.characters[leftIndex] = this.characters[rightIndex];
    this.characters[rightIndex] = temp;
  }

  joinCharacters(){
    this.data = this.characters.join('');
  }

}