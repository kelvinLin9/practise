/* array literals */
var ary1 = [1, 2, 3];
var ary2 = ary1;
console.log(ary1); // [1, 2, 3]
console.log(ary2); // [1, 2, 3]

ary1 = [99, 100];
console.log(ary1); // [99, 100]
console.log(ary2); // [1, 2, 3]


/* object literals */
var person1 = { money: 111 };
var person3 = { money: 333 };
var person2 = person1;
var person4 = person3;
console.log(person1);  // {money: 111}
console.log(person2);  // {money: 111}

person1 = { money: 222 };
console.log(person1);  // {money: 222}
console.log(person2);  // {money: 111}

person3.money = 444
console.log(person3);  // {money: 444}
console.log(person4);  // {money: 444}