// 1. 傳統建構函式的寫法

// function Animal(family) {
//   this.kingdom = '動物界'
//   this.family = family || '人科'
// }
// Animal.prototype.move = function() {
//   console.log(`${this.name} 在走`)
// }

// function Dog(name, color, size) {
//   Animal.call(this, '狗科')
//   this.name = name
//   this.color = color || '白彩'
//   this.size = size || '小'
// }
// // 繼承Animal
// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog
// Dog.prototype.bark = function () {
//   console.log(`${this.name} 正在叫`)
// }

// const Bibi = new Dog('小比','棕色','中') 
// console.log(Bibi)
// Bibi.bark()
// Bibi.move()



// ES6
// class Animal {
//   constructor(family) {
//     this.kingdom = '動物界'
//     this.family = family || '人科'
//   }
//   move() {
//     console.log(`${this.name} 移動`)
//   }
// }

// class Dog extends Animal {
//   constructor(name, color, size) {
//     super('狗科')
//     this.name = name
//     this.color = color
//     this.size = size
//   }
//   bark() {
//     console.log(`${this.name} 正在叫`)
//   }
// }

// const Bibi = new Dog('小比','棕色','中') 
// console.log(Bibi)
// Bibi.bark()
// Bibi.move()





// 2. 實戰常用方法
class Calculate {
  subtotal = 0
  total = 0
  serviceFee = 0.05
  // 私有變數，外面無法讀取
  #shopName = '放牛吃草'
  constructor(items) {
    this.items = items
    // this.orderName = this.items[0].name
  }

  addNoddles() {
    this.items.push({
      neme:'加麵',
      price: 20,
    })
  }

  sum() {
    this.subtotal = this.items.reduce((pre, current) => {
      return pre + current.price
    }, 0)
  }

  withServiceFee() {
    this.sum()
    this.total = Math.round(this.subtotal*(1 + this.serviceFee))
  }

  createOrder() {
    this.withServiceFee()
    this.orderName = `${this.#shopName} - ${this.items[0].name}`
  }

  // 希望小費可以手動寫入
  set fee(val) {
    console.log('fee', val)
    // 補上*1可以快速轉成數字（本來是字串）
    this.serviceFee = (val/100).toFixed(3)*1
  }
  // 取值
  get fee () {
    return this.serviceFee
  }
  // 靜態方法 ＝> class 不用實體化也可以直接取用
  // 靜態方法不能調用this
  // 但無法直接用order.add()
  // 直接用建構函式 console.log(Calculate.add)
  static add(a, b){
    return a + b
  } 
  // 靜態變數
  static className = 'mac好難用'
}

const order = new Calculate([
  {
    name: '牛肉麵',
    price: 200
  }
])

console.log(Calculate.add(8, 9))
console.log(Calculate.className)

order.addNoddles()
order.createOrder()
// 手動輸入服務費
order.fee = 9
// 用get才取得到
console.log(order.fee)

// class 內的變數
order.withServiceFee()

console.log(order)


