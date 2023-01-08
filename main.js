let str = `
010-6250-7783.
thesecon@gmail.com.
frozen
https://naver.com.
The quick brown fox jumps over the lazy dog.
abbcccdddd.
fire
hxyp
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`

// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )

// console.log(
//   str.match(/[가-힣]{1,}/g)
// )

// console.log(
//   str.match(/\bf\w{1,}\b/g)
// )

// console.log(
//   str.match(/\d{1,}/g)
// )

// const h = `  the hello  world   !

// `
// console.log(
//   str.match(/\s/g)
// )

// console.log(
//   h.replace(/\s/g, '')
// )

console.log(
  str.match(/.{1,7}(?=@)/g)
)
//thesecon 출력

console.log(
  str.match(/(?<=@).{1,}/g)
)
//gmail.com 출력