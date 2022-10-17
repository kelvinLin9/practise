const txt = document.querySelector('.text')
const list = document.querySelector('.list')
const add = document.querySelector('.btn_add')
const tab = document.querySelector('.tab')

data = []

// 新增事件
add.addEventListener('click', (e) => { 
  obj = {
    value : txt.value,
    id : new Date().getTime(),
    down: false
  }
  data.push(obj)
  console.log(data)
  renderData()
  txt.value = ''
})

// 渲染
function renderData(state = 'all') {
  if (state == 'all'){
    newData = data
  } else if (state == 'work'){
    newData = data.filter(function(item){
      console.log('state',state)
      return item.down == false
    })
  } else {
    newData = data.filter(function(item){
      console.log('state',state)
      return item.down == true
    })
  }
  console.log('newData',newData)
  let str = ''
  newData.forEach((item) => {
    str += `
      <li>
        <label class="checkbox" for="" >
          <input type="checkbox" data-id="${item.id}" checked/>
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
    if(item.id == id) {
      item.down = !item.down
      e.target.setAttribute("checked", !e.target.getAttribute('checked'))
      console.log(e.target.getAttribute("checked"))
    }
  })
  console.log(data)
})

// 切換顯示畫面
tab.addEventListener("click", function(e) { 
  renderData(e.target.getAttribute("data-tab"))
})