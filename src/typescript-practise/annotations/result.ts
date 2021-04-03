interface Result {
  playerName: string,
  score: number,
  problemCount: number,
  factor: number
}

interface Person {
  firstName: string,
  lastName: string,
  age?: number,
  formatName: () => string;
}

export { Person, Result }
