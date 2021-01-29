'use strict'
//1. .length
const cars = ['Ford', 'Tesla', 'Toyota', 'Nissan'] 
console.log(cars.length)

// 2 .concat()

const moreCars = ['Fiat','Lexus','Volkswragon','Honda']

const totalCars = cars.concat(moreCars);
console.log(totalCars)

// 3. .indexOf() and .lastIndexOf()
console.log(totalCars.indexOf('Honda'))
console.log(totalCars.lastIndexOf('Ford'))

//4. .join()

let stringOfCars = totalCars.join()
console.log(stringOfCars)

//5..split()
// spliting the argument with commas 
let carsFromString = stringOfCars.split(",")
console.log(carsFromString)

//6. .reverse()

let carsInreverse = totalCars.reverse()
console.log(carsInreverse)

//7. .sort()

carsInreverse = carsInreverse.sort()
console.log(carsInreverse.indexOf('Fiat'))
//8..slice()

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(4,6)
console.log(reptiles)
console.log(pets)

//9. The splice() method adds/removes items to/from an array, and returns the removed item(s).

let removedReptiles = pets.splice(4,2,'hamster');
console.log(removedReptiles);
console.log(pets);

//10..pop()

const removedPet = pets.pop();
console.log(pets)
console.log(removedPet)


//11. .push()  
//The push() method adds new items to the end of an array, and returns the new length.

pets.push('bird')
console.log(pets);

//12. .shift() The shift() method removes the first item of an array.


pets.shift('dog')
console.log(pets);
//13.  .unshift() The unshift() method adds new items to the beginning of an array, and returns the new length.

pets.unshift('turtle')
console.log(pets);


//14..forEach()
//The forEach() method calls a function once for each element in an array, in order.

// let numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

// function addTwo (item, index, arr) {
//   numbers.forEach()
//   arr[index] = item + 2;
// }

// console.log(numbers) 

let numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
let addTwo = numbers.forEach(myFunction) 

function myFunction (num, index, arr) {
  arr [index]= num + 2;
  //  newNumbers2.push(num)
}
console.log(numbers)

// number2.forEach(addtwo)

// console.log(newNumbers2);