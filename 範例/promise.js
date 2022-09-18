// let mingRunPromise = (someone) => {
//   let ran = parseInt(Math.random() * 2); // 隨機成功或失敗
//   console.log(ran,`${someone} 開始跑開始`);
//   return new Promise((resolve, reject) => {
//     // 傳入 resolve 與 reject，表示資料成功與失敗
//     if (ran) {
//       setTimeout(function(){
//         // 3 秒時間後，透過 resolve 來表示完成
//         resolve(`${someone} 跑 3 秒時間(fulfilled)`);
//       }, 3000);
//     } else {
//       // 回傳失敗
//       reject(new Error(`${someone} 跌倒失敗(rejected)`))
//     }
//   });
// }

// mingRunPromise('小明').then((data)=> {
//   // 成功訊息 (需要 3 秒)
//   console.log(data);
// }).catch((err)=> {
//   // 失敗訊息 (立即)
//   console.log(err)
// });
// console.log(mingRunPromise)

// // console.dir(Promise)


// function promise1() {
//   return new Promise((resolve, reject) => {});
// }

// console.dir(promise1());


// function promise2() {
//   return new Promise((resolve, reject) => {reject('失敗');});
// }

// console.dir(promise2());


// 自己寫promise
// function promiseEx() {
//   return new Promise((resolve, reject) => {
//     // 隨機取得 0 or 1
//     const num = Math.random() > 0.5 ? 1 : 0;

//     // 1 則執行 resolve，否則執行 reject
//     if (num) { 
//       resolve('成功');
//     }
//     reject('失敗')
//   });
// }

// console.log(promise());



//----------------------------------------------------------
// 自己寫promise且帶參數
// 中間判斷式拿掉的話就會顯示pending
function promiseCook(foodName , time) {
  // console.log(foodName)
  return new Promise(function(resolve, reject) { 
    if (time >= 3 && time <= 5) {
      resolve(`${foodName}泡了${time}分鐘，好吃`)
    } else {
      reject(`${foodName}泡了${time}分鐘，難吃`)
    }
  })
}

// console.dir(promiseCook())
// console.log(promiseCook('來一客' , 6))
// 隨機產生時間
const cookTime = parseInt(Math.random() * 7) // 隨機帶入分鐘
// promiseCook('來一客' , cookTime)
// .then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   console.log(err)
// })


// 鏈接結果
// then、catch後面都還可以接than，但是不能接catch
// promiseCook('來一客' , cookTime)
// .then((res) => {
//   return res + '，好好吃捏'
// })
// .then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   return err + '，嘔嘔嘔嘔'
// })
// .then((err) => {
//   console.log(err)
// })


// 鏈接不同promise
promiseCook('來一客' , 3)
.then((res) => {
  console.log(res)
  return promiseCook('來兩客' , 40) // 這個階段會進入 catch
})
.then((res) => {
  console.log(res)
  return promiseCook('來三客' , 5) // 由於上一個階段結果是 reject，所以此段不執行
})
.catch((err) => {
  console.log(err)
})









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

// race 和 all 不同的是只要有一個 Promise 物件回傳結果，不論成功或失敗，都會結束該次 Promise.race() 呼叫。
// Promise.race([ promiseCook('來一客' , 3),
//               promiseCook('雙響砲' , 4),
//               promiseCook('滿漢大餐' , 6)
//             ])
// .then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   console.log(err)
// })