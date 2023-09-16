

/*
Rest

*/


function sum(a, b, ...rest) {
  return a + b + rest.reduce((a, i) => a + i, 0)
}

const numbers = [1, 2, 3, 4, 5]
console.log(sum(...numbers)); // 15


//

// const a = numbers[0]
// const b = numbers[1]

const [a, b, ...other] = numbers

console.log(a, b, other); // 1 2 (3) [3, 4, 5]



//
const person = {
  name: 'Max',
  age: 25,
  city: 'Moscow',
  country: 'Russia'
}

const {name, age, ...address} = person

console.log(name, age, address); // Max 25 { city: 'Moscow', country: 'Russia' }

