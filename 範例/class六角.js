// 傳統建構函式的寫法

function Animal(family) {
  this.kingdom = '動物界'
  this.family = family || '人科'
}
Animal.prototype.move = function() {
  console.log(`${this.name} 在走`)
}

function Dog(name, color, size) {
  Animal.call(this, '狗科')
}