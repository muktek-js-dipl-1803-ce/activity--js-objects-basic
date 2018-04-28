//-----------------------------------------
// EXERCISE 1 : partyBouncer()
//   You are having a party where alcohol will be served
//   and you don't want to let in underage guests or rowdy felons
//
//   Take an array of objects, test to see which guests are older than 18
//   and convert it into an array of strings with the name only.
//------------------------------------------

var listOfPeople = [
  { name: 'Jimmy Drayfus', age: 16, isFelon: true },
  { name: 'Sherry Tomkins', age: 33, isFelon: false },
  { name: 'Romy Podolski', age: 17, isFelon: false },
  { name: 'Buffy Chang', age: 25, isFelon: true },
  { name: 'Rufus Johnson', age: 38, isFelon: false },
  { name: 'Tammy Barkley', age: 20, isFelon: false },
  { name: 'Harry McCormick', age: 39, isFelon: false},
  { name: 'Shannon O\'Bannon', age: 31, isFelon: false},
  { name: 'Greta Irishkov', age: 22, isFelon: false},
  { name: 'Maria Lewandowski', age: 28, isFelon: true},
  { name: 'Bobby Francois', age: 28, isFelon: false},
  { name: 'Salomon Marzococo', age: 14, isFelon: false },
  { name: 'Ahmad Funchess', age: 44, isFelon: true}
]

// function partyBouncer_COOL(theList){
//   return theArray
//     .filter(function(el){
//       return el.age >= 18 && el.isFelon === false
//     })
//     .map(function(el){ return
//       el.name
//     })
// }

// INPUT : array of objects
function partyBouncer(arrayOfGuestObjects){
  // (1) Define what we will return
  var filteredArrayOfStrings = []

  // (2) Iterate over the Array input
  for(var i = 0; i < arrayOfGuestObjects.length ; i++){

    // (3) Store in a named variable the element we are accessing
    //     on each iteration
    var guestObjEl = arrayOfGuestObjects[i]

    //(4) Create a condition to evaluate how we will modify the return value
    if( guestObjEl.age >= 18 && guestObjEl.isFelon === false ){

      //(5) Modify the return value/array with
      //     the relevant value from this iteration
      filteredArrayOfStrings.push(guestObjEl.name)
    }
  }
  //OUTPUT : filtered array of strings
  // (6) return the output 'return value'
  return filteredArrayOfStrings
}


var guestList = partyBouncer(listOfPeople)

console.log(guestList)
console.log(guestList.length)

console.assert(guestList.length === 7)
console.assert( guestList.indexOf("Sherry Tomkins") >= 0 )
console.assert( guestList.indexOf("Greta Irishkov") >= 0 )
console.assert( guestList.indexOf("Rufus Johnson") >= 0 )

console.assert( guestList.indexOf("Romy Podolski") === -1 )
console.assert( guestList.indexOf("Ahmad Funchess") === -1 )
console.assert( guestList.indexOf('Salomon Marzococo') === -1)
