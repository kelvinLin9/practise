let data = [];

const txt = document.querySelector(".text");
const save = document.querySelector(".btn_add");
const list = document.querySelector(".list");

//儲存代辦
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
  console.log(obj)
  data.push(obj);
  txt.value = "";
  renderData();
}

//優化(keypress)
txt.addEventListener("keypress", function (e) {
  if (e.keyCode === 9) {
    addTodo(e);
  }
});

//刪除代辦
list.addEventListener("click", function (e) {
  let num = e.target.getAttribute("data-num");
//   console.log(num)
  if (e.target.getAttribute("class") == "delete" && e.target.nodeName == "A") {
    e.preventDefault();
    data.splice(num, 1);
  } else {
    data[num].checked = !data[num].checked;
    console.log(data)
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
const tabs = document.querySelector(".tab");
console.log(1,tabs)
let toggleTab = "all";
tabs.addEventListener("click", function (e) {
  //tab點擊事件
  let all = document.querySelectorAll(".tab li");
  console.log(2,all)
  all.forEach((item) => {
    //切換活動狀態
    item.setAttribute("class", "");
  });
  console.log(2.5,all)
  e.target.setAttribute("class", "active");
  console.log(3,e.target)
  toggleTab = e.target.getAttribute("data-tab"); //更新tab
  console.log(4,toggleTab)
  renderData(); //重新渲染
});
//優化(keypress)
// txt.addEventListener("keyup", function (e) {
//   if (e.keyCode === 9) {
//     addTodo(e);
//   }
// });

//初始化
function renderData() {
  let str = "";
  let count = 0;
  data.forEach(function (item, index) {
    if (!item.checked) {
      // 計算待完成項目有幾個
      count += 1;
      if (toggleTab == "all" || toggleTab == "work") {
        str += `<li>
              <label class="checkbox" for="">
                <input type="checkbox"  data-num="${index}"/>
                <span>${item.content}</span>
              </label>
              <a href="#" class="delete" data-num="${index}"></a>
            </li>`;
      }
    } else if (
      (item.checked && toggleTab == "all") ||
      (item.checked && toggleTab == "done")
    ) {
      str += `<li>
              <label class="checkbox" for="">
                <input type="checkbox" checked data-num="${index}"/>
                <span>${item.content}</span>
              </label>
              <a href="#" class="delete" data-num="${index}"></a>
            </li>`;
    }
  });
  list.innerHTML = str;
  const todoLength = document.querySelector(".todoLength");
  todoLength.textContent = count;
}
