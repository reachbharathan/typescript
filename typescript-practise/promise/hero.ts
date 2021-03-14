export type heroObj = {
  readonly name: string;
  readonly alias: string;
};

export type hero = {
  superman: heroObj;
  batman: heroObj;
  flash: heroObj;
};


const heros: hero = {
  superman: {
    name: 'Superman',
    alias: 'Clark Kent',
  },
  batman: {
    name: 'Batman',
    alias: 'Bruce Wayne',
  },
  flash: {
    name: 'The Flash',
    alias: 'Barry Allen',
  },
};

export async function getHero(handle: string) {
  return new Promise<{ name: string; alias: string }>(res => {
    setTimeout(() => {
      res(heros[handle]);
    }, 1000);
  });
}