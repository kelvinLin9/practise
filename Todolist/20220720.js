const list = document.querySelector('.list')
const txt = document.querySelector('.text')
const save = document.querySelector('.btn_add')
console.log('save' ,save)
console.log('txt', txt)
console.log('list', list)
data = []

// 儲存待辦
save.addEventListener("click", addTodo);
function addTodo(e) {
  if (txt.value.trim() == "") {
    e.preventDefault();
    alert("請輸入正確資訊!");
    return;
  }
  let obj = {};
  obj.content = txt.value;
  obj.checked = false;
  data.push(obj);
  txt.value = "";
  renderData();
}

//優化(keypress)
txt.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    addTodo(e);
  }
});


// 渲染
function renderData() {
  let str = ''
  let count = 0; // 待完成項目
  data.forEach((item,index) => {
    if(!item.checked){
      count ++
      if (toggleTab == "all" || toggleTab == "work"){
        str += `
          <li>
          <label class="checkbox" for="">
            <input type="checkbox" data-num="${index}"/>
            <span>${item.content}</span>
          </label>
          <a href="#" class="delete" data-num="${index}"></a>
          </li>`
      }
      }else if (
        (item.checked && toggleTab == "all") ||
        (item.checked && toggleTab == "done")
      ){
        str += `<li>
        <label class="checkbox" for="">
          <input type="checkbox" checked data-num="${index}"/>
          <span>${item.content}</span>
        </label>
        <a href="#" class="delete" data-num="${index}"></a>
      </li>`
    }
  })
  console.log('str', str)
  list.innerHTML = str
  // 顯示待完成項目
  const todoLength = document.querySelector(".todoLength");
  todoLength.textContent = count;
  console.log('data', data)
}



//刪除代辦
list.addEventListener("click", function (e) {
  let num = e.target.getAttribute("data-num");
  if (e.target.getAttribute("class") == "delete" && e.target.nodeName == "A") {
    e.preventDefault();
    data.splice(num, 1);
  } else {
    data[num].checked = !data[num].checked;
  }
  renderData();
});


//刪除已完成代辦
const deleteBtn = document.querySelector(".btn_clear");
deleteBtn.addEventListener("click", function (e) {
  e.preventDefault();
  
  let newData = [];
  data.forEach((item) => {
    if(!item.checked) {
      newData.push(item);
    }
  });
  data = newData;
  renderData();
});


//切換tab
const tabs = document.querySelector(".tab")
let toggleTab = "all"
tabs.addEventListener("click", function (e) {
  //tab點擊事件
  let all = document.querySelectorAll(".tab li")
  // console.log('all', all)
  all.forEach((item) => {
    //切換活動狀態
    item.setAttribute("class", "")
  })
  // console.log('all', all)
  e.target.setAttribute("class", "active")
  toggleTab = e.target.getAttribute("data-tab") //更新tab
  renderData() //重新渲染
});