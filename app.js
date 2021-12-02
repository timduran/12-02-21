// const movies = require('./movies.js')

// const operation = process.argv[2]
// const a = process.argv[3]
// const b = process.argv[4]

// movies(operation, a, b)

const movies = require('./movies.js')

const display = arr => {
  arr.forEach(elem => console/log(elem))
}

display(movies)
