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

// --------------------------------------87
// 字串
// split
// 根據任意字母來將字符串拆分
// 自動全局匹配
// let str = 'de4d5ede4ded8edded'
// let result = str.split(/[A-z]/)

// console.log(result)


// // search 搜尋字串中是否有指令內容(輸出為第一個出現的位置)
// 只會查找第一個 設 g也沒用
// let str = 'de4d5efde4ded8edded'
// let result = str.search(/[f5]/)

// console.log(result) // 4


// match 從字串中將符合條件的內容提取出來
// let str = 'de4d5efde4ded8eddffed'
// let result = str.match(/[f85]/)
// let result2 = str.match(/[f85]/g) // 找全部
// console.log(result) // 5
// console.log(result2) // ['5', 'f', '8', 'f', 'f']

// replace 
// 參數 1.被替換的內容  2.新的內容
// let str = 'de4d5efde4ded8eddffed9'
// let result = str.replace(/[5f]/g, "炒")
// let result2 = str.replace(/[a-z]/g, "") // 移除所有小寫字母
// console.log(result2) 

// -------------------------------------88

// 檢查是否有aaa

// 量詞只對他前一個內容起作用
// {n} 正好出現n次
// n+   至少n次
// n*   0個或多個
// n?   0個或1個
// /ab{3}/        b3次
// /(ab){3}/      ab3次 
// /(ab){1,3}/    ab1~3次
// /(ab){3, }/    ab3次以上

// let reg = /a{3}/
// console.log(reg.test("aabc"))


// 檢查是否a開頭
// ^ 表示開頭
// $ 表示結尾

// /^a/
// /^a$/ 易錯 a要既是開頭又是結尾  aaa會判錯 只有一個a才行
// /^a|a$/ 這樣寫aaa才能過

// 檢查是否是一個手機號 (09開頭  共10位數字)
// /^(09)[0-9]{8}$/



//------------------------------89

// . 表任意字符
// 使用 \ 作為轉議字符

// /\./ 才能表示單純的 . 
// reg = /\\/
// 需要 \\ 才能表示一個 \
// console.log("b.\\") // b.\ 
// console.log(reg.test("b.\\"))

// \w  // 任意字母、數字、_   [A-z0-9_]
// \W  // 除了字母、數字、_   [^A-z0-9_]
// \d  // 任意數字
// \D  // 除了數字
// \s  // 空格
// \S  // 除了空格
// \b  // 單詞邊界
// \B  // 除了單詞邊界

// 檢查字串是否含有child
// reg = /child/
// reg2 = /\bchild\b/
// console.log(reg.test("hello children")) // true 但不是想要的結果
// console.log(reg2.test("hello children")) // false 對了

// 接收一個用戶輸入  希望可以自動消去空格 => 使用""替換空格
// let str = prompt("請輸入用戶名") // 有這功能但麻煩死了 自己打
// let str = "      Kelvin Lin     "
// console.log(str+"這是結尾拉")

// str1 = str.replace(/\s/g , "")
// console.log(str1+"這是結尾拉") // 連中間空格都去掉了

// str2 = str.replace(/^\s*/ , "") // 去除開頭的
// console.log(str2+"這是結尾拉")

// str3 = str.replace(/\s*$/ , "") // 去除結尾的
// console.log(str3+"這是結尾拉")

// str4 = str.replace(/^\s*|\s*$/g , "") // 整合一下
// console.log(str4+"這是結尾拉")

// ----------------------- 90

//Email的正規表達式
// 任意字母數字_ + (. + 任意字母數字_)可有可無 + @ + 任意字母數字 + . + com
// \w{3,}             ( \.   \w+)*            @    [A-z0-9]+   (\.[A-z]{2,5}){1,2}
regE = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/

let email = "fQU@fqq.123"

console.log(regE.test(email))