const container = document.querySelector('.container');
// const cardInput = document.querySelector('.card input')
const text = document.querySelector('.card input');
const btn_add = document.querySelector('.btn_add');
const list = document.querySelector('.list')
console.log(1, text, btn_add,list);

//資料初始化
let data=[];

//待辦事項放進去

function renderData(){
let str = '';    
data.forEach(function(item,index){
    str += `<li>
    <label class="checkbox" for="">
      <input type="checkbox" />
      <span>${item.content}</span>
    </label>
    <a href="#" class="delete" data-num="${index}"></a>
  </li>`
})
console.log(2,str)
list.innerHTML = str
}
console.log(3,list)
//新增待辦事項
btn_add.addEventListener('click',function(e){
    if(text.value === ""){
        alert('請輸入內容');
        return;
    }
    //console.log(text.value)
    let obj = {};
    obj.content = text.value;
    //console.log(obj);
    data.push(obj)
    //console.log(data);
    renderData();
})

//刪除待辦事項 splice
list.addEventListener('click',function(e){
    //console.log(e.target.nodeName)//測試
    //console.log(e.target.getAttribute)//測試
    if(e.target.getAttribute('class') !== 'delete' ){
        alert('你現在不是點擊到按鈕');
        return;
    }
    let num = e.target.getAttribute('data-num');
    console.log(num);
    data.splice(num,1);// 指定刪除(起始位置,往後刪除幾筆(包含自己))
    renderData()
})