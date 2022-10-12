const save = document.querySelector('.btn_add')
const txt = document.querySelector('.text')
const list = document.querySelector('.list')
console.log(txt)
console.log(list)
data = []

// 新增待辦
save.addEventListener('click', addTodo)
function addTodo (e) {
  if (txt.value.trim() == "") {
    e.preventDefault();
    alert("請輸入正確資訊!");
    return;
  }
  let todo = {
    content : txt.value,
    id : new Date().getTime(),
    checked : ''
  }
  data.push(todo)
  txt.value = ''
  // console.log(data)
  updateList()
}

// 優化
txt.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    addTodo(e);
  }
});

// 渲染
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
  console.log('render啦')
}


// 刪除指定項目 & 切換狀態
list.addEventListener('click', (e)  => {
  // console.log(list)
  // console.log(e.target)
  // console.log(e.target.nodeName)
  // console.log(e.target.getAttribute('class'))
  let id = e.target.getAttribute('data-id')
  console.log('點到的ID', id)
  if(e.target.getAttribute('class') == 'delete' ){
    console.log('點到刪除')
    data = data.filter(i => i.id != id)
    console.log(9900, data)
  }else{
    console.log('點到待辦')
    data.forEach((i ,index) => {
      // console.log(i.id)
      if(i.id == id){
        // console.log(i.id)
        if(data[index].checked == ''){
          data[index].checked = 'checked'
        } else {
          data[index].checked = ''
        }
      }
    }) 
  }
  console.log(data)
  updateList()
})



// 刪除已完成
const btnClear = document.querySelector('.btn_clear')
btnClear.addEventListener('click', (e) => {
  console.log('點了刪除已完成')
  e.preventDefault
  data = data.filter(i => {
    console.log(5566, i.checked)
    return i.checked != 'checked'
  })
  // let newData = []
  // data.forEach((i) => {
  //   if (i.checked == ''){
  //     newData.push(i)
  //     console.log('newData', newData)
  //   }
  // })
  // data = newData
  console.log(7788, data)
  updateList()
})


// 切換tab樣式
const tab = document.querySelector('.tab');
console.log(tab)
let toggleStatus = 'all';
tab.addEventListener('click',(e) => {
  toggleStatus = e.target.dataset.tab;

  let tabs = document.querySelectorAll('.tab li');
  tabs.forEach((i) => {
      i.classList.remove('active')
  });
  e.target.setAttribute("class", "active")
  updateList()
});



// 更新待辦清單
function updateList() {
  let showData = []
  if (toggleStatus == 'all'){
    showData = data
  }else if (toggleStatus == 'work'){
    showData = data.filter((i) => i.checked == '')
  }else {
    showData = data.filter((i) => i.checked == 'checked')
  } 
  console.log('showData', showData)
  const todoLength = document.querySelector('.todoLength');
  console.log('todoLength', todoLength)
  let workNum = data.filter((i) => i.checked == '');
  todoLength.textContent = workNum.length;
  render(showData);
}