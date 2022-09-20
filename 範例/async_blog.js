function promiseCook(foodName , time) {
  return new Promise(function(resolve, reject) { 
    setTimeout(() => {
      if (time >= 3 && time <= 5) {
        resolve(`${foodName}泡了${time}分鐘，好吃`)
      } else {
        reject(`${foodName}泡了${time}分鐘，難吃`)
      }
    },time*1000)
    console.log(time)
  })
}

// const cookTime = parseInt(Math.random() * 7) // 隨機帶入分鐘

// promiseCook('來一客' , cookTime)
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })


// 鏈接不同promise
// promiseCook('來一客' , 3)
//   .then((res) => {
//     console.log(res)
//     return promiseCook('來兩客' , 2) // 這個階段會進入 catch
//   })
  // .then((res) => {
  //   console.log(res)
  //   return promiseCook('來三客' , 5) // 由於上一個階段結果是 reject，所以此段不執行
  // })
  // .catch((err) => {
  //   console.log(err)
  // })


  // 改寫
  // async function asyncFn() {
  //   const res = await promiseCook('來一客' , 3);
  //   console.log(res); // resolve
  // }
  
  // asyncFn()


  // 如果要串接的話
  // async function asyncFn() {
  //   const res1 = await promiseCook('來一客' , 3);
  //   console.log(res1); // resolve
  //   const res2 = await promiseCook('來兩客' , 5);
  //   console.log(res2); // resolve
  // }
  
  // asyncFn();

  // 如果要捕捉錯誤的話
  async function asyncFn() {
    try {
      const res1 = await promiseCook('來一客' , 3);
      console.log(res1); // resolve
      const res2 = await promiseCook('來兩客' , 2);
      console.log(res2); // resolve
    } catch(err) {
      console.log(err)
    }
  }
  console.log(asyncFn())
  asyncFn();
  console.log(asyncFn)
