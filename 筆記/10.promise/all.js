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
// console.dir(promiseEx);
// console.log(promiseEx());


function promiseCook (foodName, time) {
  return new Promise((resolve, reject) => {
    if (time >= 3 && time <= 5) {
      resolve(`${foodName}泡了${time}分鐘，好吃`)
    } else {
      reject(`${foodName}泡了${time}分鐘，難吃`)
    }
  })
}

// console.dir(promiseCook)
// console.log(promiseCook('來一客' , 3))



// const cookTime = parseInt(Math.random() * 7) // 隨機帶入分鐘

// promiseCook('來一客' , cookTime)
// .then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   console.log(err)
// })


// 鏈接不同promise
// promiseCook('來一客' , 3)
//   .then((res) => {
//     console.log(res)
//     return promiseCook('再來一客' , 4)
//   })
//   .then((res) => {
//     console.log(res)
//     return promiseCook('又來一客' , 40) // 這個階段會進入 catch
//   })
//   .then((res) => {
//     console.log(res)
//     return promiseCook('還來一客' , 5) // 由於上一個階段結果是 reject，所以此段不執行
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// 舉例
// promiseCook('來一客' , 3)
//   .then((res) => {
//     console.log(res)
//     return '吃飽了，謝謝招待'
//   })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })


// 方法系列
// Promise.all([ promiseCook('來一客' , 6),
//               promiseCook('雙響砲' , 4),
//               promiseCook('滿漢大餐' , 5)
//             ])
// .then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   console.log(err)
// })


// Promise.race([ promiseCook('來一客' , 5),
//               promiseCook('雙響砲' , 4),
//               promiseCook('滿漢大餐' , 6)
//             ])
// .then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   console.log(err)
// })


// let result = Promise.resolve('result');
// result.then(res => {
//   console.log('resolved', res); // 成功部分可以正確接收結果
// }, err => {
//   console.log('rejected', err); // 失敗部分不會取得結果
// });

let result = Promise.reject('result');
result.then(res => {
  console.log('resolved', res);
}, err => {
  console.log('rejected', err); // 只有此段會出現結果
});



let obj = {
    title: '錢錢',
    amounts: 66666,
}
let objNew = {};
// objNew = obj;
// objNew = {...obj};
objNew = Object.assign(objNew, obj)
objNew.amounts = 123;


console.log(obj)
console.log(objNew)
console.log(obj.amounts); // 輸出結果為何？
// console.log(obj === objNew); // 輸出結果為 true 還是 false？ // t

// objNew = {...obj};
// objNew = Object.assign(objNew, obj)
// console.log(obj === objNew);