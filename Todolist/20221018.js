const txt = document.querySelector('.text')
const list = document.querySelector('.list')
const tab = document.querySelector('.tab')
const btnAdd = document.querySelector('.btn_add')
const btnClear = document.querySelector('.btn_clear')
const todoLength = document.querySelector('.todoLength')
data = []

// 新增
btnAdd.addEventListener('click', addTodo)
txt.addEventListener('keyup', (e) => {
  if (e.key == 'Enter'){
    addTodo()
  }
})
function addTodo() {
  console.log(txt.value)
  if (txt.value == ''){
    alert('請輸入代辦事項')
    return
  }
  obj = {
    value: txt.value,
    id: new Date().getTime(),
    checked: ''
  }
  data.push(obj)
  txt.value = ''
  renderData()
}

// 渲染
function renderData() {
  let str = ''
  let count = 0
  data.forEach((i) => {
    if (i.checked == ''){
      count ++
    }
    str += `
      <li>
        <label class="checkbox" for="">
          <input type="checkbox" ${i.checked} data-id="${i.id}"/>
          <span>${i.value}</span>
        </label>
        <a href="#" class="delete" data-id="${i.id}"></a>
      </li>
    `
  })
  list.innerHTML = str
  todoLength.innerHTML = count
}

// 切換待辦是否完成&刪除
list.addEventListener('click', (e) => {
  // 如果只有a標籤裡面有data-id屬性，點input區塊就拿不到屬性值
  let id = e.target.getAttribute('data-id')
  console.log(e.target.nodeName)
  if(e.target.nodeName == 'A') {
    data = data.filter(i => i.id != id)
  }else if(e.target.nodeName == 'INPUT') {
    data.forEach((item,index) => {
      if (item.id == id) {
        if(data[index].checked == ''){
          data[index].checked = 'checked'
        } else if(data[index].checked == 'checked') {
          data[index].checked = ''
        }
      }
    })
  }
  renderData()
})

// 刪除已完成
btnClear.addEventListener('click', () =>{
  data = data.filter(i => i.checked == '')
  renderData()
})

// 切換狀態頁面
tab.addEventListener('click', (e) =>{
  let newData = []
  console.log(e.target.getAttribute('data-tab'))
  if(e.target.getAttribute('data-tab') == 'all'){
    newData = data
  }else if (e.target.getAttribute('data-tab') == 'work'){
    newData = data.filter(i => i.checked == '')
  } else {
    newData = data.filter(i => i.checked == 'checked')
  }
  console.log(newData)
  renderData()
})
