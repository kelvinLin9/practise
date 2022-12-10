// function func(){
//   var arr = [];
//   for(var i=0; i<3; i++){
//       arr.push( function(){
//           console.log(i);
//       })
//   }
//   return arr;
// }

// var result = func();
// result[0]()
// result[1]()
// result[2]()
// func在執行的時候裡面沒有i， 所以會往全域找
// 回傳3,3,3
// 改ㄠlet就沒事了

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


function counter(){
  var count = 0;
  function innerCounter(){
    return ++count;
  }
  return innerCounter;
}

var countFunc = counter();
console.log( counter );
console.log( countFunc ); // 只回傳了innerCounter
console.log( countFunc() );   // 1
console.log( countFunc() );   // 2
console.log( countFunc() );   // 3