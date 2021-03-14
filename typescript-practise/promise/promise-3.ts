export { }

const promiseReturn = (input:number): Promise<number> => {
  return new Promise((resolve, reject) => {
    resolve(input+10);
  })
}

const myFunction = async function() {
  const result = await promiseReturn(10)
  console.log(result)
}

myFunction()