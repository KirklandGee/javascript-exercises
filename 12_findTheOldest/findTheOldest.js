/* const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

People is an array of objects. I need to loop through each item in the array, test their year of birth against the current year, and get that number. 
If that number is > than the previous person, they now become the oldest.

However, I may be able to use a "sort" array method instead.

*/

const findTheOldest = function(people) {
    let currentTime = new Date()
    let sortedPeople = people.sort(function(a, b){
        if (!a.yearOfDeath) {
            a.yearOfDeath = currentTime.getFullYear()
        }  else if (!b.yearOfDeath) {
            b.yearOfDeath = currentTime.getFullYear()      
        }
        a.age = a.yearOfDeath - a.yearOfBirth;
        b.age = b.yearOfDeath - b.yearOfBirth;
    return b.age - a.age})
    console.log(sortedPeople)
    return sortedPeople[0]
    // let oldestPerson
    // for (i=0; i<people.length(); i++) {
    //     let currAge = Date.getFullYear() - people[i].yearOfBirth;
    //     if 

    // }
};

// Do not edit below this line
module.exports = findTheOldest;
