function randomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


// var demoData = [];
// function getData() {
//   for (let i = 0; i < 1000; i++) {
//     demoData.push(randomString(5000));
//   }
// }
// getData();
// console.log(demoData);


function getData() {
  var demoData = [];
  for (var i = 0; i < 1000; i++) {
    demoData.push(randomString(5000))
  }
  console.log(demoData);
}
// getData()
