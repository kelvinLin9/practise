const number = 123456789 // 123,456,789
// 分析一下條件，從個位數開始數，每三位數加上一個','
// 使用非文字邊界 \B 與 Lookahead 來撰寫條件，判斷右邊每 3 個數字為錨點
const regex1 = /\B(?=(?:\d{3})+)/g
// number.toString().replace(regex, ',') // "1,2,3,4,5,6,789"
console.log(number.toString().replace(regex1, ','))


// 發現結果不如預期，從數字 5 開始往右數三個數字也符合條件
// 在 Lookahead 裡再加上一個 Negative Lookahead
// 判斷每湊滿 3、6、9、... 個數字之後，右邊不能再有其他數字
const regex2 = /\B(?=(?:\d{3})+(?!\d))/g
console.log(number.toString().replace(regex2, ',')) // "123,456,789"