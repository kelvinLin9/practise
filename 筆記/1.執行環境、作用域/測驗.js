// function sayHi (a){
//   console.log(a);
//   var a = 'Mark';
//   console.log(a);
//   function fu() {
//     var a = 'Casper';
//     console.log(a);
//   }
//   fu();
//   a = 'HexSchool'
//   console.log(a);
// }
// var a = 'Mary';
// sayHi(a);
// console.log(a);


// '' = true;
// true = '';
// null = '';
// 123 = ture;

// function a() {
//   b();
// }

// function b() {
//   c();
// }

// function c() {
//   console.log('Kelvin');
// }

// a();

// function sayHi(name) {
//   var greeting = 'hi';
//   return greeting + ' ' + name
//  }
//  function doSomething() {
//   var mom = '媽媽';
//   console.log(1, sayHi(mom));
//  }
 
//  debugger
//  doSomething();

// function sayHi(name) {
//   var greeting = 'hi';
//   return greeting + ' ' + name
// }
// function doSomething() {
//   var mom = '媽媽';
//   for (var i = 0; i < 3; i++) {
//     var test = 0
//     test ++
//     console.log(i,test, sayHi(mom));
//   }
// }

// debugger
// doSomething();

// 想請問當碰到函式內部有函式的情況
// 會是一次全部創造好再執行
// 還是創造執行創造執行呢


//-----
// var count = 1
// function add(count) {
//   count ++
//   console.log(count)
// }
// function a() {
//   console.log(count)
//   add(count)
// }

// debugger
// a() // 1 2
// a() // 1 2

/*
1.創造階段
函式優先
function add(count) {
  count ++
  console.log(count)
}
function a() {
  console.log(count)
  add(count)
}
var count

2.執行階段
count = 1
a() // 函式內沒有變數count，所以根據範圍鏈會向外層(全域)找到count，console.log(count)會印出1，然後執行add(count)
add(count) // 由於有傳入參數，count = 1，接著執行count++，印出2
離開add(count)的執行環境(釋放記憶體)
離開a()的執行環境(釋放記憶體)
再次執行a()並重複上述動作

想請問助教，兩次執行a()都印出12，是因為傳入參數所以在函式add的執行環境中另外宣告了一個變數count的關係嗎
*/




// 解決辦法 閉包



function a() {
  var count = 1
  function add() {
    count ++
    console.log(count)
  }
  return add
}

var test = a()
debugger
test()
test()

/*
1. 創造階段
function a() {
  var count = 1
  function add() {
    count ++
    console.log(count)
  }
  return add
}
var test 

2. 執行階段
test = a()
test()

*/