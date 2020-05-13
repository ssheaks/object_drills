'use strict';
// 1. Object initializers and methods
// Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 and water which should be set to 210.
// Use console.log to print the flour and water properties.
// Add an empty method to the loaf object called hydration.
// Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
// Call the hydration method and use console.log to print the result.

const loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        return this.water/this.flour * 100;
    }
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());

// 2. Iterating over an object's properties
// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.

const obj = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 5
}

for(const key in obj) {
    console.log(key, obj[key]);
}

// 3. Arrays in objects
// Create an object with a property called meals which is an array of strings: 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
// Use console.log to show the name of a hobbit's fourth meal of the day.
// Don't forget that humans and hobbits count from 1, but computers count from 0.
const hobbit = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

// console.log(hobbit.meals[3]);

// 4. Arrays of objects
// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.

const peeps = [
    {name: 'Sarah', jobTitle: 'programmer'},
    {name: 'Nathan', jobTitle: 'attorney'},
    {name: 'Holly', jobTitle: 'student'},
    {name: 'Gazelle', jobTitle: 'dog being cute so we do not kill her'}
];

peeps.forEach(person => console.log(`${person.name} is the ${person.jobTitle}`));

// 5. Properties that aren't there
// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.

const peeps2 = [
    {name: 'Sarah', jobTitle: 'programmer', boss: 'Holly'},
    {name: 'Nathan', jobTitle: 'attorney', boss: 'Holly'},
    {name: 'Holly', jobTitle: 'student'},
    {name: 'Gazelle', jobTitle: 'dog being cute so we do not kill her', boss: 'Sarah'}
];

peeps2.forEach(person => ('boss' in person) ?
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`):
    console.log(`${person.jobTitle} ${person.name} doesn't report to anyone`)
);

// 6. Cracking the code
// Redo your Cracking the Code problem from String Drills but this time use an object as your cipher. Additionally, create a decodeWords function that utilizes your decode function to accept a single string of words, and then return the fully decoded message as a string.
// Cracking the code
// A code has been invented which replaces each character in a sentence with a five letter word. The first letter of each encoded word determines which of the remaining four characters contains the decoded character according to this table:

// First letter	Character number
// a	2
// b	3
// c	4
// d	5
// So for example, the encoded word 'cycle' would be decoded to the character 'l'. This is because the first letter is a 'c', so you look for the fourth character, which is 'l'.

// If the first letter of the encoded word isn't 'a', 'b', 'c', or 'd' (for example 'mouse') this should be decoded to a space.

// Write a function called decode which takes an encoded word as an argument, and returns the correct decoded character.

// Use your function to decode the following message: 'craft block argon meter bells brown croon droop'.

const objMessage = {
    1: 'craft',
    2: 'block',
    3: 'argon',
    4: 'meter',
    5: 'bells',
    6: 'brown',
    7: 'croon',
    8: 'droop'
};

function decodeObj(obj) {
    let decoded = '';
    for (const key in obj) {
        if(obj[key].charAt(0) === 'a') {
             decoded = decoded + `${obj[key].charAt(1)}`;
             console.log(decoded);
        } else if(obj[key].charAt(0) === 'b') {
            decoded = decoded + `${obj[key].charAt(2)}`;
        } else if(obj[key].charAt(0) === 'c') {
            decoded = decoded + `${obj[key].charAt(3)}`;
        } else if(obj[key].charAt(0) === 'd') {
            decoded = decoded + `${obj[key].charAt(4)}`;
        } else {
            decoded = decoded + ' ';
        }
    }
    console.log(decoded);
    return decoded;
}
decodeObj(objMessage);
//string version

function decode(str) {
    const strArr = str.split(" ");
    const letterArr = strArr.map(word => {
        if(word.charAt(0) === 'a') {
            return word.charAt(1);
        } else if(word.charAt(0) === 'b') {
            return word.charAt(2);
        } else if(word.charAt(0) === 'c') {
            return word.charAt(3);
        } else if(word.charAt(0) === 'd') {
            return word.charAt(4);
        } else {
            return ' ';
        }
    });
    console.log(letterArr.join(''));
    return letterArr.join('');
}
const message = 'craft block argon meter bells brown croon droop';
decode(message);

// 7. Factory Functions with LOTR
// Write a factory function called createCharacter (review in this assignment) that could appropriately build characters from LOTR that have the following attributes:
// ===============================================================================================
// | Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
// -----------------------------------------------------------------------------------------------
// | Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
// -----------------------------------------------------------------------------------------------
// | Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
// -----------------------------------------------------------------------------------------------
// | Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
// -----------------------------------------------------------------------------------------------
// | Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
// -----------------------------------------------------------------------------------------------
// Each character should have the method describe which takes no parameters and prints out the string: "{name} is a {race} from {origin}."

// Each character should also have a method called evaluateFight that takes in a character object and returns the following string: "Your opponent takes {x} damage and you receive {y} damage" where x and y are the differences between each characters attack and defense values. If defense exceeds attack, then take zero damage.

// Using array literal syntax, create an array characters that calls your factory function for each character in the table above with the relevant parameters. Your characters array should now have 5 objects in it.

// Add a new character to characters (make up any attributes not provided):

// Arwen Undomiel is a Half-Elf of Rivendell
// Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.

// Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.

// Using the .filter() function, create a new array from characters that ONLY contains characters with attack value above 5.

// What if you wanted to equip a weapon for each character and change how they are described? For example:

// Gandolf the White is a Wizard of the Middle Earth who uses a wizard staff
// Bilbo Baggings is a Hobbit of the Shire who uses the Ring
// Frodo ... String and Barrow Blade
// Aragon .... Anduril
// Legolas ... Bow and Arrow
// Arwen .... Hadhafang
// How would you change the factory function and other methods?

function createCharacter(name, nickname, race, origin, attack, defense) {
    return {
        name: name,
        nickname: nickname,
        race: race,
        origin: origin,
        attack: attack,
        defense: defense,
        describe: function() {
            console.log(`${name} is a ${race} from ${origin}`)
        },
        evaluateFight: function(character) {
            let x = 0
            let y = 0
            if (this.attack > character.defense) {
                x = this.attack -character.def
            }
            if (this.defense > character.attack) {
                y = this.defense - character.attack
            }
            console.log(`Your opponent takes ${x} damage and you receive ${y} damage`)
        }
    }
}

// Create array of characters:

const characters = [
    createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunedain', 6, 8),
    createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
  ];

console.log(characters);
// Add character to array:

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-elf', 'Rivendell', 6, 5));
characters.find(obj => obj.nickname === 'aragorn').describe();
console.log(characters.filter(obj => obj.race === 'Hobbit'));
console.log(characters.filter(obj => obj.attack > 5));
console.log(characters.shift());

// 8. BONUS: A Database Search
// Put this dataset at the top of your program:

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];
// Write a function findOne() that takes in the following two arguments:

// arr - array of Heroes objects to search through
// query - object with one or more key/value pairs that must exactly match the target Hero
// The first matching result should be returned even if multiple match. If a match isn't found, return null

function findOne(arr, query) {
    //find the keys in the query object
    const queryKeys = Object.keys(query);
    //loop through each item in the array
    for (let i = 0; i < arr.length; i++) {
        let matchExists = true;
        let hero = arr[i];
        //loop through the queryKeys array
        for(let i = 0; i < queryKeys.length; i++) {
            let currKey = queryKeys[i];
            // console.log(currKey, hero[currKey], query[currKey])
            // if the values of the query key do not match the array object key break the loop and move to the next object
            if (hero[currKey] !== query[currKey]) {
                matchExists = false;
                break
            }
        }
        //if there is no match then move to the next hero object or exit loop if it is the last item
        if (!matchExists) {
            continue;
        } else {
            console.log('matches', hero)
            return hero;
        }
    };
    console.log('no matches');
    return null
};

// const findOne = function(arr, query) {
  
//     // See for-of loops - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
//     // Iterates through array placing current element in locally scoped variable `hero`
//     for (const hero of arr) {
//       let assumeMatch = true;
  
//       // loop through each key in `query` object
//       for (const key in query) {
        
//         // when first value in query[key] does NOT match hero[key]
//         // break out of the loop and set assumeMatch = false
//         if (query[key] !== hero[key]) {
//           assumeMatch = false;
//           break;
//         }
//       }
      
//       // if failed to match, continue to next hero or exit loop if at last hero
//       if (!assumeMatch) continue;
      
//       // otherwise a match was found! return the hero
//       console.log(hero)
//       return hero;
//     }
  
//     // heroes array was exited without a match so return null
//     console.log('no match')
//     return null;
//   };

// With the above data set, you should be able to call findOne with the arguments shown below and return the following results:

findOne(HEROES, { id: 1 });
// => { id: 1, name: 'Captain America', squad: 'Avengers' }

findOne(HEROES, { id: 10 });
// => null

findOne(HEROES, { id: 2, name: 'Aquaman' });
// => null

findOne(HEROES, { id: 5, squad: 'Justice League' });
// => { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

findOne(HEROES, { squad: 'Justice League' });
// => { id: 4, name: 'Superman', squad: 'Justice League' }


// 8a. BONUS II: A Database Method
// Let's create a fake database in memory with the same dataset:

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function (query) {
    //find the keys in the query object
    const queryKeys = Object.keys(query);
    //access heroes array
    const heroesArr = this.store.heroes
    console.log(heroesArr)
    //loop through each item in the array
    for (let i = 0; i < heroesArr.length; i++) {
        let matchExists = true;
        let hero = heroesArr[i];
        //loop through the queryKeys array
        for(let i = 0; i < queryKeys.length; i++) {
            let currKey = queryKeys[i];
            console.log(currKey, hero[currKey], query[currKey])
//             // if the values of the query key do not match the array object key break the loop and move to the next object
            if (hero[currKey] !== query[currKey]) {
                matchExists = false;
                break
            }
        }
//         //if there is no match then move to the next hero object or exit loop if it is the last item
        if (!matchExists) {
            continue;
        } else {
            console.log('matches', hero)
            return hero;
        }
    };
    console.log('no matches');
    return null
}
};
// Add a method to Database called findOne and have it behave the same as the findOne function above. However, instead of referencing a HEROES array in the global scope, it should pull from the store in the Database. HINT: You'll want to use this for this...

// The usage should be:

Database.findOne({ id: 2 });
// => { id: 2, name: 'Iron Man', squad: 'Avengers' }
Database.findOne({id:13})