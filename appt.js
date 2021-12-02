// console.log('hi')

// console.log(process.argv)

const calculator = require('./calculator.js')

const operation = process.argv[2]
const a = process.argv[3]
const b = process.argv[4]

calculator(operation, a, b)

