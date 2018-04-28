/**
 * dogFactory()
 *   Create a function that returns the following dog object.
 *   The function should accept 3 arguments, a string for the dog's
 *   name, a string for the breed, and a string for the age
 *
 *   The function should return an object with the properties
 *   shown below. The humanAge should be the age input * 7.
 *
 *
 *   dogFactory('Fido', 'Golden Retriever', 12 )
 *    => {
 *       humanAge: 84, // 12 * 7
 *       breed: 'Golden Retriever',
 *       name: 'Fido',
 *       specie: 'canis familiaris',
 *       legs: 4
 *    }
**/

function dogFactory(theName, type, yearsOld){
  //(1) declare what we are going to return
  var dogObj = {
    legs: 4,
    specie: 'canis familiaris',

    //(2) make modifications to return value
    name : theName,
    breed: type,
    humanAge : yearsOld * 7
  }

  //(2 - alternative)
  // dogObj.name = theName
  // dogObj.breed = type
  // dogObj.humanAge = yearsOld * 7


  // (3) return the thing that we need to return
  return dogObj

}

var dog1 = dogFactory('Schulzty', 'Dachsund', 8)
var dog2 = dogFactory('Mia', 'Pit Bull', 9)
var dog3 = dogFactory('Abby', 'Corgi', 4)

console.assert(dog1.specie === "canis familiaris")
console.assert(dog1.name === "Schulzty")
console.assert(dog1.humanAge === 56)
console.assert(dog1.legs === 4)

//---------
console.assert(dog2.specie === "canis familiaris")
console.assert(dog2.breed === "Pit Bull")
console.assert(dog2.humanAge === 63)
//---------
console.assert(dog3.name === "Abby")
console.assert(dog3.breed === "Corgi")
console.assert(dog3.humanAge === 28)
console.assert(dog1.legs === 4)
