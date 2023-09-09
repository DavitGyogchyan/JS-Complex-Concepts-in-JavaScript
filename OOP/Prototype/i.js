'use strict'

const person = {
  name: 'Maxim',
  age: 25,
  greet() {
    console.log('Greet !');
  }
}

person.greet()    // Greet !
person.sayHi()    // Error
person.toString() // '[object Object]'

//


const person2 = new Object ({
  name: 'Maxim',
  age: 25,
  greet() {
    console.log('Greet !');
  }
})

Object.prototype.sayHello = () => {
  console.log('Hello');
}


person2.sayHello() // Hello


const lena = Object.create(person2)

lena.greet() // Greet !
lena.toString() // '[object Object]'


//


const str = 'I am String'

const str2 = new String('I am String')

str.sayHello() // Hello 
