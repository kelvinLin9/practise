// https://hugh-program-learning-diary-js.medium.com/%E5%89%8D%E7%AB%AF%E4%B8%AD%E9%9A%8E-js%E4%BB%A4%E4%BA%BA%E6%90%9E%E4%B8%8D%E6%87%82%E7%9A%84%E5%9C%B0%E6%96%B9-closure-%E9%96%89%E5%8C%85-cbb9c6a4185c
function test() {
  var a = 100;
    function inner() {
    a++;
    console.log(a)
  }
  console.log(inner())
  return inner // 不加括號，只 return 這個 function
}
var func = test()
func() // 11 => 等同於 inner()
func() // 12 => 等同於 inner()
func() // 13 => 等同於 inner()


// var a = 10;
// function innerB() {
//   a++;
//   console.log(a)
// }

// innerB()
// innerB()


// function complex(num) {
//   // 複雜計算
//   return num * num * num;
// }
// console.log(complex(20))
// console.log(complex(20))
// console.log(complex(20))


// function complex(num) {
//   // 複雜計算
//   console.log('calculate'); // 通過這行就可以知道有沒有經過計算
//   return num * num * num;
// }
// function cache(func) {
//   var ans = {};
//   console.log(ans)
//   return function(num) {
//   // 因為簡化語法，所以可以直接 return 這個 function
//     if (ans[num]) {
//       return ans[num];
//     }
    
//     ans[num] = func(num); // 在這裡等同於 ans[20] = complex(20)
//     return ans[num];
//   }
// }
// const cachedComplex = cache(complex)
// console.log(cachedComplex(20)) // 計算
// console.log(cachedComplex(20)) // 純輸出，就會判斷 ans[20] 存在否？
// console.log(cachedComplex(200)) // 純輸出
// console.log(cachedComplex(20))
// calculate
// 8000
// 8000
// 8000













// -------------------------------------------------
// function func(){
//   var arr = [];
//   for(let i=0; i<3; i++){
//       arr.push( function(){
//           console.log(i);
//       })
//   }
//   console.log(arr)
//   return arr;
// }

// var result = func();
// // console.log(func())
// console.log(result[1]())
// result[0]()
// result[1]()
// result[2]()
// func在執行的時候裡面沒有i， 所以會往全域找
// 回傳3,3,3
// 改let就沒事了

// function func(){
//   var arr = [];
//   for(var i=0; i<3; i++){
//       (function(i){
//           arr.push( function(){
//               console.log(i);})
//       })(i)
//   }
//   return arr;
// }

// var result = func();
// result[0]()
// result[1]()
// result[2]()

//回傳0,1,2


// 以下為Kuro大大的正確例子：
// function counter(){
//   var count1 = 0;
//   return function(){
//       return ++count1
//   }
// }

// var countFunc = counter();
// console.log(countFunc()); //1
// console.log(countFunc()); //2
// console.log(countFunc()); //3



// function counterQQ(){
//   var count = 0;
//   function innerCounter(){
//     return ++count;
//   } 
//   var tmpV = innerCounter();
//   // console.log( '>>>' + tmpV ); (這行無關重要所以先註解起來)
//   return tmpV;
// }
// console.log( counterQQ() );   // 1
// console.log( counterQQ() );   // 1
// console.log( counterQQ() );   // 1



// var msg = "global"

// function outer() {
//   var msg = "local"
//   function inner() {
//     // var msg = "local......"
//     return msg;
//   }
//   return inner;
// }

// var innerFunc = outer();

// console.log( outer ); // 取得整個函式
// console.log( outer()); // 取得函式回傳結果（回傳了一個函式
// console.log( innerFunc() );  //回傳了上面回傳的函示的回傳結果



// var count = 0;

// function counter(){
//   return ++count;
// }
// console.log( counter() );   // 1
// console.log( counter() );   // 2
// console.log( counter() );   // 3


// function counter(){
//   var count = 0;
//   function innerCounter(){
//     return ++count;
//   }
//   return innerCounter;
// }

// var countFunc = counter();
// console.log( counter );
// console.log( countFunc ); // 只回傳了innerCounter
// console.log( countFunc() );   // 1
// console.log( countFunc() );   // 2
// console.log( countFunc() );   // 3