//-----------------------------94
// innerHTML用於獲取HTML內部代碼
// 對於自結束標籤、這個屬性沒有意義


// 如果需要讀取元素節點屬性
// 直接使用元素.屬性名
// Ex. 元素.id 元素.name 元素.value
// 注意:class不行
// 要用屬性.className

const save = document.querySelector('.btn_add')
const txt = document.querySelector('.text')
const list = document.querySelector('.list')
console.log(txt)
console.log(txt.innerHTML) // 裡面沒東西 就會顯示空的
console.log(list.innerHTML)
console.log(txt.placeholder)
console.log(txt.className)
console.log(list)


//---------------------------------------96

// getElementsByTagName() 方法,返回當前節點的指定標籤名後代節點
// childNodes 屬性,表示當前節點的所有子節點
// firstChild 屬性,表示當前節點的第一個子節點
// lastChild 屬性,表示當前節點的最後一個子節點


//---------------------------------97
// parentNode       屬性,表示當前節點的父節點
// previousSibling  屬性,表示當前節點的前一個兄弟節點
// nextSibling      屬性,表示當前節點的後一個兄弟節點

// innerHTML 有標籤
// innerText 沒標籤

