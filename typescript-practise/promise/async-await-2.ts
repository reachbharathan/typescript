const a = () => new Promise<string>(resolve => {
  setTimeout(() => resolve('result of a()'), 1000); // 1s delay
});

const b = () => new Promise<string>((resolve,reject) => {
  setTimeout(() => reject('result of b()'), 500); // 0.5s delay
});

const c = () => new Promise<string>(resolve => {
  console.log(1/0);
  setTimeout(() => resolve('result of c()'), 1100); // 1.1s delay
});


const doJobs = async (): Promise<string[]> => {
 try {
   var resultA = await a();
   var resultB = await b();
   var resultC = await c();

   return [resultA, resultB, resultC];
 } catch (error) {
   console.log(error);
   return [null, null,null]
 }
};

// doJobs() returns a promise
doJobs().then((result) => {
  console.log('success:', result);
})
  .catch((error) => {
    console.log('error:', error);
  });

// normal flow
console.log('I am a sync operation!');