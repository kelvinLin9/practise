var date = new Date();
Date.prototype.getFillDate = function () {
  var dd = String(this.getDate());
  var mm = String(this.getMonth() + 1);
  var yyyy = String(this.getFullYear());

  return yyyy + '/' + mm + '/' + dd;
}
console.log(date); 
console.log(date.getFillDate()); 