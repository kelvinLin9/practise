// var date = new Date();
// Date.prototype.getFillDate = function () {
//   var dd = String(this.getDate());
//   var mm = String(this.getMonth() + 1);
//   var yyyy = String(this.getFullYear());

//   return yyyy + '/' + mm + '/' + dd;
// }
// console.log(date); 
// console.log(date.getFillDate()); 


// 1.
// function buyItem() {
//   var myMoney = 1000;
//   return function (price) {   // 這裡就是一個閉包，不過目前只會使用一次
// 	  myMoney = myMoney - price;
//     return myMoney;
//   }
// }

// 1-1.可以給不同變數使用 不會互相汙染
// let balance1 = buyItem()(100);  // 存取內部函式的變數
// console.log(balance1);
// let balance2 = buyItem()(200);  
// console.log(balance2);

// 1-2. 試試另一種呼叫
// let balance3 = buyItem()
// console.log(balance3);
// console.log(balance3(100));
// console.log(balance3(100));


// 2.可以預設有多少錢
// 使用閉包產生兩個作用域
// 這裡的 money 代表身上帶的錢
function buyItem(money) {
  var myMoney = money;
	console.log(1,this);          // let MingCost = buyItem(1000)會執行
  return function (price) {
    console.log(2,this);        // console.log(MingCost(100))會執行
    // myMoney 第一次由外部傳入，接下來在這個 function 內不斷更新
    myMoney = myMoney - price;
    return myMoney;
  }
}
let MingCost = buyItem(1000); // 存取內部函式的變數，這個是小明錢包內的錢
let JayCost = buyItem(10000); // 杰哥拿出的小錢

// 小明的內層作用域變數，也就是小明剩的錢
// console.log(MingCost); // 900
console.log(MingCost(100)); // 900
console.log(MingCost(100)); // 800
console.log(MingCost(100)); // 700

// 杰哥的內層作用域變數，這裡是杰哥剩的錢
console.log(JayCost(1000)); // 9000
console.log(JayCost(1000)); // 8000
console.log(JayCost(1000)); // 7000