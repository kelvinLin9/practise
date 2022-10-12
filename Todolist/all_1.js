/* <li>
<label class="checkbox" for="">
  <input type="checkbox" />
  <span>把冰箱發霉的檸檬拿去丟</span>
</label>
<a href="#" class="delete"></a>
</li> */
const txt = document.querySelector('.text');
const save = document.querySelector('.btn_add');
const list = document.querySelector('.list');
// console.log(1,txt)
// console.log(2,list)
let data = [];

// 儲存代辦
save.addEventListener('click',addTodo);
function addTodo(e){
    console.log(3,'輸入的代辦',txt.value.trim())
    if (txt.value.trim() == ''){
        e.preventDefault();
        alert('打字啦北七');
        return;
    }
    let obj = {};
    obj.content = txt.value;
    obj.checked = false;
    data.push(obj);
    console.log("data",data);
    txt.value = '';
    render();
}

// 刪除
list.addEventListener('click',function(e){
  e.preventDefault();
  let num = e.target.getAttribute('data-num');
  console.log("選取第幾個代辦",num)
  if (e.target.getAttribute("class") == "delete" && e.target.nodeName == "A") {
    data.splice(num, 1);
  } else {
    data[num].checked = !data[num].checked;
  }
  render();
})


// 刪除已完成待辦
const deleteBtn = document.querySelector('.btn_clear');
console.log(5,deleteBtn);
deleteBtn.addEventListener('click',function(e){
    e.preventDefault();
    let newData = [];
    data.forEach(function(item){
        if(!item.checked){
            newData.push(item)
        }
    });
    data = newData
    render()
})
    

//切換tab
const tabs = document.querySelector(".tab");
console.log(7,tabs)
let toggleTab = "all";
tabs.addEventListener("click", function (e) {
  //tab點擊事件
  let all = document.querySelectorAll(".tab li");
  console.log(8,all)
  all.forEach((item) => {
    //切換活動狀態
    item.setAttribute("class", "");
  });
  console.log(9,e.target)
  
  e.target.setAttribute("class", "active");
  toggleTab = e.target.getAttribute("data-tab"); //更新tab
  console.log("toggleTab:",toggleTab)
  render(); //重新渲染
});




//初始化
function render() {
  let str = "";
  let count = 0;
  data.forEach(function (item, index) {
    if (toggleTab == "all") {
       
      str += `<li>
           <label class="checkbox" for="">
             <input type="checkbox"  data-num="${index}"/>
             <span>${item.content}</span>
           </label>
           <a href="#" class="delete" data-num="${index}"></a>
         </li>`;
      
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
  console.log("str",str);
  list.innerHTML = str;
  const todoLength = document.querySelector(".todoLength");
  todoLength.textContent = count;
}


















// //初始化
// function render() {
//   let str = "";
//   let count = 0;
//   data.forEach(function (item, index) {
//     // console.log("item.checked",item.checked)
//     // console.log("item",item)
//     if (!item.checked) {
//       // 計算待完成項目有幾個
//       console.log("item.checked",item.checked)
//       console.log("item",item)
//       count += 1;
//       if (toggleTab == "all" || toggleTab == "work") {
//         str += `<li>
//               <label class="checkbox" for="">
//                 <input type="checkbox"  data-num="${index}"/>
//                 <span>${item.content}</span>
//               </label>
//               <a href="#" class="delete" data-num="${index}"></a>
//             </li>`;
//       }
//     } else if (
//       (item.checked && toggleTab == "all") ||
//       (item.checked && toggleTab == "done")
//     ) {
//       str += `<li>
//               <label class="checkbox" for="">
//                 <input type="checkbox" checked data-num="${index}"/>
//                 <span>${item.content}</span>
//               </label>
//               <a href="#" class="delete" data-num="${index}"></a>
//             </li>`;
//     }
//   });
//   console.log("str",str);
//   list.innerHTML = str;
//   const todoLength = document.querySelector(".todoLength");
//   todoLength.textContent = count;
// }




// // 渲染
// function render() {
//     let str = '';
//     data.forEach(function(item,index){
//         str += `
//         <li>
//         <label class="checkbox" for="">
//         <input type="checkbox" data-num="${index}"/>
//         <span>${item.content}</span>
//         </label>
//         <a href="#" class="delete" data-num="${index}"></a>
//         </li>
//         `
//     })
//     list.innerHTML = str;
// }

