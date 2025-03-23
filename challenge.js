//* Here come's all the challenges of this course !

//? 153 - Challenge 1

//* Challenge 1 Data

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

//^ Important Challenge - Lot more to Learn !
// Both are Dog's Age !
// const Julia_dogs = [3, 5, 2, 12, 7];
// const Kate_dogs = [4, 1, 15, 8, 3];

// const Julia_dogs2 = [9, 16, 6, 8, 3];
// const Kate_dogs2 = [10, 5, 6, 1, 4];
// const julia_Dogs1 = Julia_dogs.slice(1, -1); //* it will remove the 1st and last age because they are
// // cats ✅!

// const julia_Dogs2 = Julia_dogs2.slice(1, -1);
// const Dogs1 = [...julia_Dogs1, ...Kate_dogs];
// const Dogs2 = [...julia_Dogs2, ...Kate_dogs2];

// Dogs1.sort((a, b) => a - b);
// Dogs2.sort((a, b) => a - b);

// console.log(Dogs1);
// console.log(Dogs2);

// const checkDogs = function (Dogs) {
//   //   console.log("\n-------------------* Julia Dog's  *--------------\n");
//   //   julia_Dogs.forEach(function (data, i) {
//   //     let type = data >= 3 ? 'Adult' : 'Puppy';
//   //     console.log(`Dog ${i + 1} : ${type}`);
//   //   });
//   //   console.log("\n-------------------* Kate Dog's  *--------------\n");
//   //   Kate_dogs.forEach(function (data, i) {
//   //     let type = data >= 3 ? 'Adult' : 'Puppy';
//   //     console.log(`Dog ${i + 1} : ${type}`);
//   //   });

//   Dogs.forEach(function (data, i) {
//     let type = data >= 3 ? 'Adult' : 'Puppy';

//     if (type === 'Adult')
//       console.log(
//         `Dog number ${i + 1} is an ${type}, and is ${data} years old`
//       );
//     else console.log(`Dog number ${i + 1} is still a ${type} 🐶`);
//   });
// };
// console.log('\n-------------------* Data - 1  *--------------\n');
// checkDogs(Dogs1);
// console.log('\n-------------------* Data - 2  *--------------\n');
// checkDogs(Dogs2);

// const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const erutouse = 1.1;

// const movementsUSD = movements1.map(mov => mov * erutouse);

// console.log(movementsUSD);

//^ Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
// const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (DogAges) {
//   //* Step 1 : Done with human Ages - Using Map
//   const humanAges = DogAges.map(function (age) {
//     if (age <= 2) {
//       return 2 * age;
//     } else {
//       return 16 + age * 4;
//     }
//   });

//   console.log(humanAges);

//   //* Step 2 : Done Filtering based on condition - Using filter

//   const ElgibleAges = humanAges.filter(age => age >= 18);

//   console.log(ElgibleAges);

//   //* Step 3 : Average Human Ages  - Using Reduce

//   //* Make sure that order of parameters of reduce method is imporant - accumelator , value , index , array - last
//   const AvgHumanAge = Math.ceil(
//     ElgibleAges.reduce((acc, age, i, arr) => acc + age / arr.length, 0)
//   );

//   return AvgHumanAge;
// };

// console.log(calcAverageHumanAge(dogAges1));
// console.log(calcAverageHumanAge(dogAges2));

//^ Challeneg - 3

//* Need to implement above human age Avg using - Arrow Functionm

// const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
// const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (DogAges) {
//   const AvgHumanAgeCal = DogAges.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(ages => ages >= 18)
//     .reduce((acc, ages, i, arr) => {
//       return acc + ages / arr.length;
//     }, 0);
//   return Math.ceil(AvgHumanAgeCal);
// };

// console.log(calcAverageHumanAge(dogAges1));
// console.log(calcAverageHumanAge(dogAges2));

/////////////////////////////////////////////////

//* 147 - Simple Array methods

/**
 * Slice()  - Based on index starts from   0 to n - 1;
 * -- slice()
      slice(start)
      slice(start, end)

 * Splice() - Use to make modification to existing array - No new Array
  - Splice (start , delete count , items );
 * reverse()
 * concat()
 * Join()
 * 
 * 
 */

// // //^ Lecture 147 - Simple Array Methods !

// // const age = [10, 20, 30, 40, 50];
// // const year = [2013, 2004, 2005, 2006];

// // //* Slice Methods - Used to create a copy of existing Date
// // const sliced = age.slice(1, 2);

// // console.log(sliced);

// // //* Splice Methods - Used to Modify a original Date & Replace Data !
// // // - Splice (start , delete count , items );
// // // year.splice(2, 2, 2012, 2024);
// // //* Reverse Years  reverse() used to reverse the array
// // year.reverse();

// // //* Lets sort the reversed Array
// // year.sort();

// // const jorney = year.join(' -> ');

// // console.log(jorney)

// //^ Step 1 - Working with transaction movements !

// //* Learned - Array & ForEach Loop  | insertadjecentHtml("Where to insert" , what to insert);

// //* Lets create a Fucntion to Display Movements !

// const displayMovements = function (movements) {
//   //& Before inserting New movements clear old onces . use innerHtml to do so
//   containerMovements.innerHTML = ''; //* Set to empty string !

//   //& We need to apply changes to Actual Div !
//   movements.forEach(function (mov, i) {
//     //& Define the Type of the Movement - +ve means Diposit & -ve means Withdrawal
//     const type = mov > 0 ? 'deposit' : 'withdrawal';

//     // Lets store it in a variable !
//     let html = `
//     <div class="movements__row">
//         <div class="movements__type movements__type--${type}">
//           ${i + 1}  ${type}
//         </div>
//         <div class="movements__value">${mov}</div>
//     </div>`;

//     containerMovements.insertAdjacentHTML('beforeend', html);
//   });
// };

// displayMovements(account1.movements);

//* Done ✅

//^ Lets Again use Movements Array

//* Map Method ! In pratice

//! Map method is similar to foreach method but having a add on banifit of creating a new array

//* Lets use Array function
// const movemnts_tract = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1} : You Made a ${
//       mov > 0 ? 'Diposit' : 'Withdraw'
//     } of -${Math.abs(mov)} ✔`
// );

// movemnts_tract.forEach(function (record) {
//   console.log(record);
// });

// // // we are passing accounts Array !
// // createUserNames(accounts);

// // accounts.forEach((acc, i) => console.log(`User ${i + 1} : ${acc.userName}`));

// //^ Filter Method ()

// //* Filter method is similar to Map - But filter data based on some condition only if it is True !

// const Deposits = movements.filter(mov => mov > 0);
// const Withdraws = movements.filter(mov => !(mov > 0));

// console.log(Deposits, Withdraws);

// // Max Elemetn using Reduce methods

// const maxele = movements.reduce((acc, mov) => Math.max(acc, mov), 0);

// console.log(maxele);

// const movement = [200, 450, -400, 3000, -650, -130, 70, 100];

// const ago = movement.findLastIndex(mov => Math.abs(mov) >= 130);

// console.log(
//   `Your latest largest movement was ${movement.length - ago} Movements ago`
// );

//* Flat() Method & FlatMap() Method
// Methods used to flat the Nested Array into a Single 1D Array for easy traversal

// Methods used to convert Multi Dimentional Arrays into Single Dimentions !

//& This is A 2D Array
const movement = [
  [200, 450, [-400, 3000]],
  [[-650, -130], 70, 100],
];

console.log(movement.flat(2));
//* We can pass Depth as Arguments for the flat() Method ! 
