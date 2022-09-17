// function add(x, y) {
//   return x + y;
// }

// console.log(add(1, 2)); // 3



// 函式 fetchA 模擬了必須經過冗長運算才能得到結果的狀況，函式 add 等待兩數皆取得結果時，就執行加法運算。

// 程式碼是不是有點複雜？要檢查 x 又要檢查 y 的！的確，在沒有 promise 的 恐龍 年代 ，我們是這樣解決等候的問題
// function fetchA(cb) {
//   setTimeout(function() {
//     // 模擬冗長運算
//     return cb(1);
//   }, 3000);
// }

// function fetchB(cb) {
//   setTimeout(function() {
//     // 模擬冗長運算
//     return cb(2);
//   }, 300);
// }

// function add(getX, getY, cb) {
//   var x, y;
//   getX(function(xVal) {
//     x = xVal; // 得到 x
//     y && cb(x, y); // 若 y 也取到了，就執行加法運算
//     console.log(cb)
//     console.log(1)
//   });
//   getY(function(yVal) {
//     y = yVal; // 得到 y
//     x && cb(x, y); // 若 x 也取到了，就執行加法運算
//     console.log(2)
//   });
// }

// add(fetchA, fetchB, function(a, b) {
//   console.log(a + b); // 加法運算，印出相加結果
// });




function fetchA() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // 模擬冗長運算
      resolve(1);
    }, 3000);
  });
}

function fetchB(cb) {
  return new Promise(function(resolve, reject) {
    resolve(2);
  });
}

function add(xPromise, yPromise) {
  // x 與 y 都取到了
  return Promise.all([xPromise, yPromise])
  .then(function(values) {
    return values[0] + values[1]; // 執行加法運算
  });
}

add(fetchA(), fetchB())
.then(function(sum) {
  console.log(sum); // 印出相加結果
});