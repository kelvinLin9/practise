const txt = document.querySelector('.text');
const save = document.querySelector('.btn_add');
const list = document.querySelector('.list');
data = [];
console.log(1,txt.value);
console.log(2,save)
console.log(3,list)

//儲存代辦

save.addEventListener('click',function(e){
  if (txt.value.trim() === ''){
    alert('打字拉北七')
    return;
  }
  let obj = {};
  obj.content = txt.value;
  obj.checked = false;
  data.push(obj);
  txt.value = '';
  console.log(data)
  // render();
});


//刪除

list.addEventListener('click',function(e){
  let num = e.target.getAttribute('data-num');
})