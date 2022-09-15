const url ='https://jsonplaceholder.typicode.com/todos/1'
axios.get(url)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

console.log(1, axios)
console.log(2, axios.get(url))



Promise.all([
  axios.get(url),
  axios.get(url)
])
.then((res) => {
  console.log(res)
})
.catch((err) => {
  console.log(err)
})

// 一開始寫法
// const getData = async () => {
//   try {
//     const res = await axios.get(url)
//     console.log(res)
//   } catch (err) {
//     console.log(err)
//   }
// }
// getData()


// 也可以放Promise.all
const getData = async () => {
  try {
    const res = Promise.all([
      axios.get(url),
      axios.get(url)
    ])
    // console.log(res)
    return res
  } catch (err) {
    // console.log(err)
    throw new Error(err)
  }
}

// 第一種呼叫方法
// getData().then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   throw new Error(err)
// })

// 立即函式
// 忘記加上await的話 res會是promise，因為他的本質是一個函式
(async () => {
  const res = await getData()
  console.log(res)
})()