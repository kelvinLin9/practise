const txt = document.querySelector('.text')
const list = document.querySelector('.list')
const add = document.querySelector('.btn_add')
const tab = document.querySelector('.tab')
const inputTodo = document.querySelector('.input')

data = []

// 新增事件
add.addEventListener('click', addTodo)
inputTodo.addEventListener('keyup',(e)=>{
  if(e.key == 'Enter'){
    addTodo()
  }
})
function addTodo(){
  obj = {
    value : txt.value,
    id : new Date().getTime(),
    checked: ''
  }
  data.push(obj)
  console.log(data)
  renderData()
  txt.value = ''
}




// 渲染
function renderData(state = 'all') {
  if (state == 'all'){
    newData = data
  } else if (state == 'work'){
    newData = data.filter(function(item){
      return item.checked == ''
    })
  } else {
    newData = data.filter(function(item){
      return item.checked == 'checked'
    })
  }
  console.log('newData',newData)
  let str = ''
  newData.forEach((item) => {
    str += `
      <li>
        <label class="checkbox" for="" >
          <input type="checkbox" data-id="${item.id}" ${item.checked}/>
          <span>${item.value}</span>
        </label>
        <a href="#" class="delete" data-id="${item.id}"></a>
      </li>
      `
  })
  // console.log(str)
  list.innerHTML = str
}

// 改變工作完成狀態
list.addEventListener('click', function(e) {
  id = e.target.getAttribute("data-id") 
  data.forEach((item) =>{
    if(e.target.classList.value == 'delete') {
      e.preventDefault();
      data = data.filter(item => item.id != id);   
    } 
  })
  renderData()
})

// 切換顯示畫面
tab.addEventListener("click", function(e) { 
  renderData(e.target.getAttribute("data-tab"))
})