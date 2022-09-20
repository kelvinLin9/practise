function promiseFn (boolean) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(boolean) {
        resolve('resolve');
      } else {
        reject('reject')
      }
    }, 1000)
  })
}

const asyncFn = async () => {
  try {
    const res1 = await promiseFn(true);
  } catch(error) {
    console.log('error', error);
  }
}

console.log(asyncFn)

