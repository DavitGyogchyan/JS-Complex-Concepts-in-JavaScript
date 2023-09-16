const divs = document.querySelectorAll('div')
console.log(divs); // NodeList(4) [div, div, div, div]

const nodes = [...divs]
console.log(nodes); // (4) [div, div, div, div]

console.log(Array.isArray(divs)); // fasle
console.log(Array.isArray(nodes)); // true

