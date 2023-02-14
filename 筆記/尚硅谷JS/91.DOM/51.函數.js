// 51. 構造函數(少用)  具名函式 匿名函式


// var obj = new Object();
// console.log(obj);

// var fun = new Function("console.log('喔耶')");
// console.log(fun());
// fun.hello = '你好'
// console.log(fun.hello);

// // 開發時幾乎不用這種方式

// // 使用函數聲明創建
// function dd (s = 1) {
//   console.log(s)
//   document.write('QQQQQ')
// }
// dd('fq')

// console.log(s)
// 52-54. 參數
// 多個形參之間使用,隔開，聲明形參就相當於在函數內部聲明了對應的變量，但是並不賦值。

// dd -> 函式(物件)   dd() -> 調用函式



// 55 返回值
// break 中斷
// continue 跳過
// return 結束並回傳

// 56 立即函數

// (function(){
//   console.log("555")
//   alert('qqw')
// })()

// 57 方法

//方法和函數只是名稱上的差別，本質上沒有差異

// 79 

function ddd () {
  console.log(this.name)
}

fff = {
  name : 'hih',
  ddd
}

ddd()
fff.ddd()