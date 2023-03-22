// new的運算值會產生一個新的物件，並且連結回原本的建構物件，並且將this綁定在這個函式上
// __proto__是在物件上
// prototype是在函式上
function Player(name,number,age) {
  this.name = name || "???";
  this.number = number || "???";
  this.age = age || "???";
}

Player.prototype.skill = function() {
  console.log(this.name + '幫你簽名')
}

let Curry = new Player('Stephen Curry',30,35)
let Paul = new Player('Chris Paul',3,37)
console.log(Curry)
console.log(Player.prototype === Curry.__proto__) //true
//但用prototype去新增原型方法較好維護


// 建立多層繼承

function AllStars(field) {
  this.field = field
}
AllStars.prototype.skill2 = function() {
  console.log(this.name + '幫你簽名2')
}

Player.prototype = Object.create(AllStars.prototype)
Player.prototype.skill = function() {
  console.log(this.name + '幫你簽名')
}

let Curry2 = new Player('Stephen Curry',30,35)
console.log(Curry2)

Curry2.skill2()