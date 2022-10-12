const save = document.querySelector('.btn_add')
const txt = document.querySelector('.text')
const list = document.querySelector('.list')
console.log(txt)
console.log(list)
data = []

save.addEventListener('click', addTodo)
function addTodo(e) {
  if (txt.value.trim() == ''){
    alert("k")
    return
  }
  let todo = {
    content : txt.value,
    id : new Date().getTime(),
    checked : ''
  }
  data.push(todo)
  txt.value = ''
  updateList()
}

txt.addEventListener('keyup', function(e) {
  if (e.key == "enter") {
    addTodo(e)
  }
})

function render (showData) {
  let str = ''
  showData.forEach((i) => {
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

list.addEventListener(('click'),(e) => {
  let id = e.target.getAttribute("data-id")
  if(e.target.getAttribute('class') == 'delete'){
    data = data.filter((i) => i.id != id)
  }else{
    data.forEach((i,index) => {
      if(i.id = id){
        if(data[index].checked == ''){
          data[index].checked == 'checked'
        }else{
          data[index].checked == ''
        }
      }
    })
  }
  updateList()
})

const btnClear = document.querySelector('.btn_clear')
btnClear.addEventListener('click', (e) => {
  data = data.filter(i => {
    i.checked = ''
  })
})