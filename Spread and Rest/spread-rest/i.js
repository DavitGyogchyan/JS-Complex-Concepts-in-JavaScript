

const citiesRussia = ['Moscow', "Piter", 'Kazan', 'Novosibirsk'] 
const citiesEurope = ['Berlin', "Praga", 'Paris'] 


// object
const citiesRussiaWithPopulation = {
  Moscow: 20,
  Piter: 8,
  Kazan: 5,
  Novosibirsk: 3
}

const citiesEuropeWithPopulation = {
  Berlin: 10,
  Praga: 3,
  Paris: 2,
}

// Spread

// console.log(...citiesRussiaWithPopulation); // TypeError: Found non-callable @@iterator

console.log({...citiesRussiaWithPopulation}); // { Moscow: 20, Piter: 8, Kazan: 5, Novosibirsk: 3 }


console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation}); 
/*
{
  Moscow: 20,
  Piter: 8,
  Kazan: 5,
  Novosibirsk: 3,
  Berlin: 10,
  Praga: 3,
  Paris: 2
}
*/





