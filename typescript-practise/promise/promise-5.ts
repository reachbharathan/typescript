// I send a request to the company. This is synchronous
// company replies with a promise
const angelMowersPromise = new Promise<string>((resolve, reject) => {
  // a resolved promise after certain hours
  setTimeout(() => {
    resolve('We finished mowing the lawn')
  }, 1000) // resolves after 100,000ms
  // reject("We couldn't mow the lawn")
})

const myPaymentPromise = new Promise<Record<string, number | string>>((resolve, reject) => {
  // a resolved promise with  an object of 1000 Euro payment
  // and a thank you message
  setTimeout(() => {
    resolve({
      amount: 1000,
      note: 'Thank You',
    })
  }, 1000)
  // reject with 0 Euro and an unstatisfatory note
  // reject({
  //   amount: 0,
  //   note: 'Sorry Lawn was not properly Mowed',
  // })
})

angelMowersPromise
  .then(() => myPaymentPromise.then(res => resolve(res)))
  .catch(error => console.log(error))