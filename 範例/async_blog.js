function promiseCook(foodName , time) {
  return new Promise(function(resolve, reject) { 
    setTimeout(() => {
      if (time >= 3 && time <= 5) {
        resolve(`${foodName}泡了${time}分鐘，好吃`)
      } else {
        reject(`${foodName}泡了${time}分鐘，難吃`)
      }
    },time*1000)
    // console.log(time)
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
  // async function asyncFn() {
  //   try {
  //     const res1 = await promiseCook('來一客' , 3);
  //     console.log(res1); // resolve
  //     const res2 = await promiseCook('來兩客' , 2);
  //     console.log(res2); // resolve
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }
  // console.log(asyncFn())
  // asyncFn();
  // console.log(asyncFn)

  // 用表達式改寫，結果一樣
  // const asyncFn = async () => {
  //   try {
  //     const res1 = await promiseCook('來一客' , 3);
  //     console.log(res1); 
  //     const res2 = await promiseCook('來兩客' , 2);
  //     console.log(res2); 
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }
  
  // console.log(asyncFn()) 





// Promise.all()
// 有時候我們可能會想同時享用多碗泡麵，這時候就需要使用複數個爐台，這個複數爐台就是 Promise.all()，其背後操作則是使用陣列將多個 promise 函式打包，當全部執行完成後回傳陣列結果，而陣列的結果順序與一開始傳入的一樣。 但是一旦有 Promise 物件失敗，將回傳失敗那個物件回傳的結果，如果是全部失敗，則回傳第一個 Promise 物件的失敗結果，來當成整個最後的錯誤訊息。
// Promise.all([ promiseCook('來一客' , 3),
//               promiseCook('雙響砲' , 4),
//               promiseCook('滿漢大餐' , 6)
//             ])
// .then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   console.log(err)
// })

// 改寫
  // async function asyncFnAll() {
  //   try {
  //     const res = await Promise.all([ promiseCook('來一客' , 3),
  //     promiseCook('雙響砲' , 2),
  //     promiseCook('滿漢大餐' , 5)
  //   ])
  //     console.log(res); // resolve
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }
  // asyncFnAll();





  // 4.撰寫可用性高的錯誤捕捉
  // 
  // async function asyncFn() {
  //   const res1 = await promiseCook('來一客' , 3);
  //   console.log(res1); // resolve
  //   const res2 = await promiseCook('來兩客' , 5);
  //   console.log(res2); // resolve
  //   const res3 = await promiseCook('來三客' , 2);
  //   console.log(res3); // resolve
  // }

  // const catchError = (asFn) => {
  //   return asFn.catch((err) => {
  //     console.log(err);
  //   })
  // }
  
  // catchError(asyncFn())


  // ---------------------------------------------------------------
  // 拿作品的API來寫看看 有驗證問題先註解掉統計數據的部分
  // async function getAllOrders () {
  //     let allOrders = []
  //     let revenue = 0
  //     let ordersNum = 0
  //     for (let i = 0; i <= 6; i++) {
  //       const url = `https://vue3-course-api.hexschool.io/api/kelvinlin9/admin/orders?page=${i}`
  //       await axios
  //         .get(url)
  //         .then((res) => {
  //           console.log(res)
  //           // res.data.orders.forEach((order) => {
  //           //   this.allOrders.push(order)
  //           //   this.ordersNum += 1
  //           //   this.revenue += order.total
  //           // })
  //         })
  //         .catch((err) => console.error(err))
  //     }
  //   }
  //   getAllOrders ()



  // catch分開寫呢
  async function getAllOrders () {
    let allOrders = []
    let revenue = 0
    let ordersNum = 0
    for (let i = 0; i <= 6; i++) {
      const url = `https://vue3-course-api.hexschool.io/api/kelvinlin9/admin/orders?page=${i}`
      const res = await axios.get(url)
      console.log(res)
      // res.data.orders.forEach((order) => {
      //   this.allOrders.push(order)
      //   this.ordersNum += 1
      //   this.revenue += order.total
      // })
    }
  }

  const catchError = (asFn) => {
    return asFn.catch((err) => {
      console.log(err);
    })
  }
  
  catchError(getAllOrders ())


// ------------------------------------------------------

















// ray 助教的範例 (先拿自己的改看看吧)
// [1, 2].forEach(catchError(async (n) => {
//   await axios.get(`https://jsonplaceholder.typicode.com/todos/${n}`)
// }))

// 無法傳入參數
// const catchError = (asFn) => {
//   return asFn.catch((error) => {
//     console.log('error', error);
//   })
// }

// 改寫
// const catchError = (asFn) => {
//   return (n) => {
//     return asFn(n).catch((error) => {
//       console.log('error', error);
//     })
//   }
// }
// catchError(asyncFn());
