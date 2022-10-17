const inputText = document.getElementById('inputText');
const addBTN = document.getElementById('addBTN');
let todoData = [];

//監聽按鈕(新增)
// addBTN.addEventListener('click',function(e){
//     console.log(123)
// });//以前寫法
addBTN.addEventListener('click',addTodo);
function addTodo(){
    // console.log(123);
    let todo = {
        txt : inputText.value, //裝輸入的TODO事項
        id : new Date().getTime(), //做各種操作用的 新增 刪除..(時間戳)
        checked:'' //判別已完成或待完成
    };
    //防呆
    if(todo.txt !== ''){
        todoData.unshift(todo);
        //  console.log(todoData)
        inputText.value = '';//輸入框清空
    }
    updateList();
}

//渲染
const todoList = document.getElementById('todoList');
function render(arr){
    let str = '';
    arr.forEach(i => {
        str += `
        <li data-id="${i.id}">
        <label class="checkbox" for="">
        <input type="checkbox" ${i.checked} />
        <span>${i.txt}</span>
        </label>
        <a href="#" class="delete"></a>
        </li>
        `;   
    });
    todoList.innerHTML = str;
}

//3. tab切換(css樣式)
const tab = document.getElementById('tab');
let toggleStatus = 'all';
tab.addEventListener('click',changeTab);
function changeTab(e){
    toggleStatus = e.target.dataset.tab;

    let tabs = document.querySelectorAll('#tab li');
    tabs.forEach((i) => {
        i.classList.remove('active')
    });
    e.target.classList.add('active')
    updateList()
}


//4. 刪除 & 切換 checked 狀態功能
todoList.addEventListener('click',deleteAndChecked);
function deleteAndChecked(e){
    let id = e.target.closest('li').dataset.id;
    console.log(id);
    if (e.target.classList.value == "delete"){
        e.preventDefault();
        todoData = todoData.filter(i => i.id != id);
    }else{
        // 切換checked狀態功能
        todoData.forEach((i,index)=>{
            if(i.id == id){
                if(todoData[index].checked == 'checked'){
                    todoData[index].checked = '';
                }else{
                    todoData[index].checked = 'checked';
                }
            }
        });
    }
    updateList();
}

//5. 更新代辦清單
function updateList(){
    let showData = [];
    if(toggleStatus == 'all'){
        showData = todoData;
    }else if (toggleStatus == 'work'){
        showData = todoData.filter((i) => i.checked == '');
    }else {
        showData = todoData.filter((i) => i.checked == 'checked');
    }

    const workNum = document.getElementById('workNum');
    let todoLength = todoData.filter((i) => i.checked == '');
    workNum.textContent = todoLength.length;

    render(showData);
}
//初始
updateList();


//6. 刪除已完成 todo
const deleteBTN = document.getElementById('deleteBTN');
deleteBTN.addEventListener('click',function(e){
    e.preventDefault();
    todoData = todoData.filter((i) => i.checked != 'checked');
    updateList();
});


// 7. 優化

inputText.addEventListener('keypress',function(e){
    if(e.key == 'Enter'){
        addTodo();
    }
});