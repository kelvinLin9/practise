function date (time) {
  const localDate = new Date(time * 1000)
  return localDate.toLocaleDateString()
}

// 1970 / 1 / 1 算經過多少毫秒
console.log(date(1234))