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

function promise() {
  return new Promise((resolve, reject) => {
    // 隨機取得 0 or 1
    const num = Math.random() > 0.5 ? 1 : 0;

    // 1 則執行 resolve，否則執行 reject
    if (num) { 
      resolve('成功');
    }
    reject('失敗')
  });
}