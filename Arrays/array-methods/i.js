const people = [
  {name: 'Vladilen', age: 25, budget: 40000},
  {name: 'Elena', age: 17, budget: 3400},
  {name: 'Igor', age: 49, budget: 50000},
  {name: 'Mikayel', age: 15, budget: 1800},
  {name: 'Vasilisa', age: 24, budget: 25000},
  {name: 'Viktoria', age: 38, budget: 2300}
]

// for
for(let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// for of
for(let person of people) {
  console.log(person);
}

// forEach
people.forEach((person, index, peopleArr) => {
  console.log(person);
  console.log(index);
  console.log(peopleArr);
})


// map
const newPeople = people.map(person => {
  return person
})

console.log(newPeople);


// filter
const adults = []
for(let i = 0; i < people.length; i++) {
  if(people[i].age >= 18) {
    adults.push(people[i])
  }
}
console.log(adults);

//
const adults2 = people.filter(person => person.age >= 18)
console.log(adults2);



// reduce
let amount = 0
for(let i = 0; i < people.length; i++) {
  amount += people[i].budget
}
console.log(amount); // 122500

//
const amount2 = people.reduce((total, person) => total + person.budget, 0)
console.log(amount2); // 122500



// practical ex
const newPeople2 = people  
  .filter(person => person.budget > 3000)
  .map(person => {
    return {
      info: `${person.name} (${person.age})`,
      budget: person.budget
    }
  })

console.log(newPeople2);  
/*
Array(4)
  v0: 
     budget: 40000
     info: "Vladilen (25)"
    >[[Prototype]]: Object
  >1: {info: 'Elena (17)', budget: 3400}
  >2: {info: 'Igor (49)', budget: 50000}
  >3: {info: 'Vasilisa (24)', budget: 25000}
    length: 4
  >[[Prototype]]: Array(0)
*/