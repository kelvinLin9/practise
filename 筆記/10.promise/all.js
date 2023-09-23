// 自己寫promise
function promiseEx() {
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

console.log(promiseEx());