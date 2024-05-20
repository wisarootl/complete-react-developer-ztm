const myPromise = new Promise((resolve, reject) => {
  if (Math.random() >= 0.5) {
    setTimeout(() => {
      resolve('I have succeeded')
    }, 1000)
  } else {
    reject('I have failed')
  }
})

myPromise.then((value) => console.log(value)).catch((rejectValue) => console.log(rejectValue))
