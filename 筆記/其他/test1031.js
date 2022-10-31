for (var i=0; i<5; i++){
  console.log(i)
  setTimeout(function(){
      console.log(i) //一秒後console顯示五次5
  }, 1000);
}