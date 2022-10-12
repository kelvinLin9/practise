const checkedAllBtn = document.getElementById("checkedAllBtn")
const items = document.getElementById("items")
console.log(checkedAllBtn)
checkedAllBtn.onclick = function() {
  
  console.log(items)

  for (let i = 0; i < items.length; i++) {
    items[i].checked = true
  }
}