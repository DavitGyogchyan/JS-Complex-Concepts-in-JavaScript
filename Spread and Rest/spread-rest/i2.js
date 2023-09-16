const citiesRussiaWithPopulation = {
  Moscow: 20,                            ////// Moscow
  Piter: 8,
  Kazan: 5,
  Novosibirsk: 3
}

const citiesEuropeWithPopulation = {
  Moscow: 26,                            ////// Moscow
  Berlin: 10,
  Praga: 3,
  Paris: 2,
}

console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation});
/*
{
  Moscow: 26,    // Moscow: 26
  Piter: 8,
  Kazan: 5,
  Novosibirsk: 3,
  Berlin: 10,
  Praga: 3,
  Paris: 2
}
*/



const numbers = [5, 37, 42, 17]
// ES6
console.log(Math.max(...numbers)); // 42

// old way
console.log(Math.max.apply(null, numbers)); // 42  // (context is null)





