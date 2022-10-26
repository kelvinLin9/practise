//取得資料

let data = [];

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
console.log(sortSelect)

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
  console.log(e.target.getAttribute('data-type'))
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
  render(showData)
})

sortSelect.addEventListener('click',(e) => {
  console.log(e.target)
})