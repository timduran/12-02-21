// const add = parseInt(process.argv[2]) + parseInt(process.argv[3])
// console.log(add)

// const sub =process.argv[2] - process.argv[3]
// console.log(sub)

// const operation = process.argv[2]
// const a = parseInt(process.argv[3])
// const b = parseInt(process.argv[4])

// switch (operation) {
//   case 'add':
//     console.log(a + b)
//     break
//   case 'subtract':
//     console.log(a - b)
//     break
//   case 'multiply':
//     console.log(a * b)
//     break
//   case 'divide':
//     console.log(a / b)
//     break
// }

const calculator = (op, a, b) => {
  switch (op) {
    case 'add':
      console.log(a + b)
      break
    case 'subtract':
      console.log(a - b)
      break
    case 'multiply':
      console.log(a * b)
      break
    case 'divide':
      console.log(a / b)
      break
  }
}
module.exports = calculator
