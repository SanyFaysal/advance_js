
console.log('Hello')
const myPromise = new Promise((resolve, reject) => {
  const num = 5;
  if (num === 5) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

const myPromise2 = new Promise((resolve, reject) => {
  const num = 5;
  if (num === 5) {
    resolve("Success 2");
  } else {
    reject("Error 2");
  }
});


// myPromise
// .then((res)=>console.log(res))
// .catch(err=>console.log(err))


Promise
.all([myPromise, myPromise2])
.then(([promise1,promise2])=>console.log('promise 1',promise1, 'promise 2', promise2))
.catch(err=>console.log(err))

console.log('end')