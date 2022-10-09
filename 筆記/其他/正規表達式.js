// function currency (num) {
//   const n = parseInt(num, 10)
//   // 四捨五入
//   return `${n.toFixed(0).replace(/./g, (c, i, a) => 
//   // i 且 c不等於. 且 a的長度-1 % 3 等於 0
//   // 是 => 
//     (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c)
//   )}`
// }

// console.log(currency (17899985))





// const number = 123456789 // 123,456,789
// // 分析一下條件，從個位數開始數，每三位數加上一個','
// // 使用非文字邊界 \B 與 Lookahead 來撰寫條件，判斷右邊每 3 個數字為錨點
// const regex1 = /\B(?=(?:\d{3})+)/g
// // number.toString().replace(regex, ',') // "1,2,3,4,5,6,789"
// console.log(number.toString().replace(regex1, ','))


// 發現結果不如預期，從數字 5 開始往右數三個數字也符合條件
// 在 Lookahead 裡再加上一個 Negative Lookahead
// 判斷每湊滿 3、6、9、... 個數字之後，右邊不能再有其他數字

// const regex2 = /\B(?=(?:\d{3})+(?!\d))/g
// console.log(number.toString().replace(regex2, ',')) // "123,456,789"




// 檢查是否有a或b
// /a|b/


// []裡的內容也是獲的關係
// [ab] = [a|b]
// [a-z] 任意小寫字母
// [a-zA-Z] = [A-z] 任意字母

// 檢查字串是否有abc 或adc 或 aec
// /a[bde]c/

// [^ ]除了

// ------------------
// 字串
// split
// 根據任意字母來將字符串拆分
// let str = 'de4d5ede4ded8edded'
// let result = str.split(/[A-z]/)

// console.log(result)


// // search 搜尋字串中是否有指令內容(輸出為第一個出現的位置)
// let str = 'de4d5efde4ded8edded'
// let result = str.search(/[f5]/)

// console.log(result) // 4


// match 從字串中將符合條件的內容提取出來
// let str = 'de4d5efde4ded8eddffed'
// let result = str.match(/[f85]/)
// let result2 = str.match(/[f85]/g) // 找全部
// console.log(result) // 5
// console.log(result2) // ['5', 'f', '8', 'f', 'f']

// 