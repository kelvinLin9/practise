// console.log(123)

// function qq () {
//   let a = 'MVP'
//   console.log(this)
//   console.log(this.a)
// }

// qq()

// console.log(x)


// var name = '全域'

// function fn () {
//   console.log(this.name)
// }

// obj = {
//   name: 'FQ',
//   fn,
//   fn2: function () {
//     console.log(this.name)
//     return this.name
//   }
// }
// var t = obj.fn2
// var t2 = obj.fn2()
// fn()
// obj.fn();
// obj.fn2();
// console.log(t())
// console.log(t2)


// var arr = [1, 2, 3];
// console.log(arr.length);
// console.log(arr.unshift(555));
// console.log(arr);


// function Animal(family) {
//   this.kingdom = '動物界';
//   this.family = family || '人科'; // 科別
// }

// Animal.prototype.breathe = function() {
//   console.log(this.name + ' 正在持續呼吸');
// }

// function Dog(name, color, size) {
//   Animal.call(this, '犬科')
//   this.name = name; // 狗的名字
//   this.color = color; // 狗的顏色
//   this.size = size; // 狗的體型
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.back = function() {
//   console.log(this.name + ' 吠叫');
// }

// var bibi = new Dog('bibi', '棕色', '小');
// console.log(bibi.constructor); // Dog 的建構函式
// console.log(bibi); // Dog 的建構函式
// console.log(Animal); // Dog 的建構函式


// function test(v){
//   console.log(v)
//   console.log(vv)
//   var v = 3
//   console.log(v)
// }
// test()



// var nameA = "Microsoft";
 
// function funcA(){
//     var nameA = "Google";
//     console.log(nameA);
// }
// console.dir(funcA); 
// funcA(); //Google
// console.log(nameA); //Microsoft





// ----------------------
// var nameK = "Microsoft";
 
// function funcA(){
//   var nameK = "Google";
//   alert(nameK);
//   return function(){
//       nameK = "Facebook";
//       alert(nameK);
//   };
// }

// var o = funcA(); //Google
// console.dir(o)
// // alert(nameK); //Microsoft
// o(); //Facebook



// function complex(num) {
//   // 複雜計算
//   console.log('calculate'); // 通過這行就可以知道有沒有經過計算
//   return num * num * num;
// }
// function cache(func) {
//   var ans = 0;
//   return function(num) {
//   // 因為簡化語法，所以可以直接 return 這個 function
//     if (ans) {
//       return ans;
//     }
    
//     ans = func(num); // 在這裡等同於 ans[20] = complex(20)
//     return ans;
//   }
// }
// const cachedComplex = cache(complex)
// console.log(cachedComplex(20)) // 計算
// console.log(cachedComplex(20)) // 純輸出，就會判斷 ans[20] 存在否？
// console.log(cachedComplex(20)) // 純輸出


var a = 1
function test() {
  var b = 2
  function inner() {
    var c = 3
    console.log(b)
    console.log(a)
  }
  inner()
}
test()
console.dir(test)
console.dir(window)