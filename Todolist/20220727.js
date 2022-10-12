const save = document.querySelector('.btn_add')
const txt = document.querySelector('.text')
const list = document.querySelector('.list')
// console.log(txt)
// console.log(list)
data = []

// 新增
save.addEventListener('click', addTodo)
function addTodo(e) {
  if (txt.value.trim() == ''){
    alert('')
    return
  }
  let obj = {
    content : txt.value,
    id : new Date().getTime(),
    checked : ''
  }
  data.push(obj)
  txt.value = ''
  console.log(data)
  render()
}

// 優化
txt.addEventListener('keyup',(e)=>{
  // console.log(e.key)
  if (e.key == 'Enter') {
    addTodo()
  }
})

// 渲染
function render() {
  let str = ''
  data.forEach((i) => {
    str += `
    <li>
    <label class="checkbox" for="">
    <input type="checkbox" ${i.checked} data-id="${i.id}"/>
    <span>${i.content}</span>
    </label>
    <a href="#" class="delete" data-id="${i.id}"></a>
    </li>
    `
  })
  list.innerHTML = str
}

const tab = document.querySelector('.tab')
let toggleStatus = 'all'
tab.addEventListener('click', (e) =>{
  console.log(e.target.dataset)
  toggleStatus = e.target.dataset.tab

  let tabs = document.querySelectorAll('.tab li')
  console.log(tabs)
  tabs.forEach((i) => {
    console.log(i.classList)
  })
})