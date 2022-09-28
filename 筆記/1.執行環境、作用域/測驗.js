function sayHi (a){
  console.log(a);
  var a = 'Mark';
  console.log(a);
  function fu() {
    var a = 'Casper';
    console.log(a);
  }
  fu();
  a = 'HexSchool'
  console.log(a);
}
var a = 'Mary';
sayHi(a);
console.log(a);
