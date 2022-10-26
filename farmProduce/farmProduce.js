//取得資料

let data = [];
let type = ''
let sort = ''
let upDown = ''

function getData() {
  axios
    .get("https://hexschool.github.io/js-filter-data/data.json")
    .then((res) => {
      console.log(res.data[50]["種類代碼"])
      data = res.data.filter((i) => i["種類代碼"] && i["作物名稱"].trim())
      data = data.filter((i) => i["交易量"] !== 0)
      render(data)
    });
}
getData();

const showList = document.querySelector('.showList')
const buttonGroup = document.querySelector('.button-group')
const searchInput = document.querySelector('.rounded-end')
const searchBtn = document.querySelector('.search')
const sortSelect = document.querySelector('.sort-select')
const sortAdvanced = document.querySelector('.js-sort-advanced')
console.log(sortAdvanced)

function render(showData) {
  let str = ''
  showData.forEach((item) => {
    str += `
    <tr>
      <td>${item["作物名稱"]}</td>
      <td>${item["市場名稱"]}</td>
      <td>${item["上價"]}</td>
      <td>${item["中價"]}</td>
      <td>${item["下價"]}</td>
      <td>${item["平均價"]}</td>
      <td>${item["交易量"]}</td>
    </tr>
    `
  })
  showList.innerHTML = str
}

buttonGroup.addEventListener('click',(e) => {
  type = e.target.getAttribute('data-type') 
  showData = data.filter((i) => {
    return i["種類代碼"] == e.target.getAttribute('data-type')
  })
  console.log(showData)
  render(showData)
})

searchBtn.addEventListener('click', (e) => {
  if(searchInput.value.trim() ===  '') {
    alert('請輸入作物名稱')
    return
  }
  showData = data.filter((i) => {
    return i["作物名稱"].match(searchInput.value.trim())
  })
  searchInput.value = ''
  render(showData)
})

sortSelect.addEventListener('change',(e) => {
  sort = e.target.value
  // console.log(e.target.childNodes.getAttribute('data-sort')) 想辦法
})

sortAdvanced.addEventListener('click',(e) => {
  upDown = e.target.getAttribute('data-sort')
  sort = e.target.getAttribute('data-price')
  data.sort((a,b) => {
    if(upDown === 'up'){
      return b[sort] - a[sort]
    } else if(upDown === 'down'){
      return a[sort] - b[sort]
    }

  }) 
  render(data)
})