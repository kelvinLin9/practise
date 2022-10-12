//------------------------9192
const btn = document.getElementById('btn')
console.log(document)
console.log(btn)
console.log(btn.innerHTML)
console.log(btn.innerHTML="7788")

// 綁定一個單擊事件
btn.onclick = function() {
  alert("點你老木")
}

//-----------------------------93

// 如果想把script寫到<head>裡 可用下面語法 
// 頁面載入完成才執行
// window.onload = function() {
//   alert("點你老木")

