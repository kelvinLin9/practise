let box1 = document.getElementById('box1')
let input1 = document.getElementById('input1')
box1.addEventListener('mousewheel', function(e) { 
  
  console.log(e.wheelDelta)
  console.log(box1.clientHeight)
  if (e.wheelDelta > 0) {
    box1.style.height = box1.clientHeight - 30 + 'px'
  } else {
    box1.style.height = box1.clientHeight + 30 + 'px'
  }
  // 當滾輪滾動，如果瀏覽器有滾動條，滾動調會隨之滾動
  // 這是瀏覽器默認行為，可以取消
  e.preventDefault()
});


// 鍵盤事件一邊都會綁定給一些可以獲取焦點的對象
// keydown連續觸發時，第一次和第二次間格稍長，其他會非常快
// keyup不會
input1.addEventListener('keydown', function(e) {
  // 
  console.log(e.keyCode)
  console.log(e.shiftKey)
})

