//STEP 1
// let movies = ['Spirited Away', 'Good Will Hunting', 'Midnight in Paris', 'Intouchables', 'The Lord of the Rings'];
// window.console.log(movies[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = 'Chocolat';
// movies[1] = 'The Lord of the Rings';
// movies[2] = 'The Sixth Sense';
// movies[3] = 'Good Will Hunting';
// movies[4] = 'Mindnight in Paris';
// window.console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[0] = 'Chocolat';
// movies[1] = 'The Lord of the Rings';
// movies[2] = 'The Sixth Sense';
// movies[3] = 'Good Will Hunting';
// movies[4] = 'Mindnight in Paris';

// movies.splice(2, 0, 'Intouchables');
// window.console.log(movies.length);

//STEP 4
// let movies = [];
// movies[0] = 'Chocolat';
// movies[1] = 'The Lord of the Rings';
// movies[2] = 'The Sixth Sense';
// movies[3] = 'Good Will Hunting';
// movies[4] = 'Mindnight in Paris';
// movies.shift();
// for (let i = 0; i < movies.length; i++) {
//     window.console.log(movies[i] + "\n");
// }

//STEP 5
// let i;
// let movies = [];
// movies[0] = 'Chocolat';
// movies[1] = 'The Lord of the Rings';
// movies[2] = 'The Sixth Sense';
// movies[3] = 'Good Will Hunting';
// movies[4] = 'Mindnight in Paris';
// movies[5] = 'Spirited Away';
// movies[6] = 'Howl\'s Moving Castle';

// for (i in movies) {
//     window.console.log(movies[i]);
// }

//STEP 6
// let movies = [];
// movies[0] = 'Chocolat';
// movies[1] = 'The Lord of the Rings';
// movies[2] = 'The Sixth Sense';
// movies[3] = 'Good Will Hunting';
// movies[4] = 'Mindnight in Paris';
// movies[5] = 'Spirited Away';
// movies[6] = 'Howl\'s Moving Castle';

//  for (let movie of movies) {
//     console.log(movie);
// }

//STEP 7;
// let movies = [];
// movies[0] = 'Chocolat';
// movies[1] = 'The Lord of the Rings';
// movies[2] = 'The Sixth Sense';
// movies[3] = 'Good Will Hunting';
// movies[4] = 'Mindnight in Paris';
// movies[5] = 'Spirited Away';
// movies[6] = 'Howl\'s Moving Castle';
// movies.sort();

// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 8
// let i = 0;
// let c = 0;
// let movies = [];
// movies[0] = 'Chocolat';
// movies[1] = 'The Lord of the Rings';
// movies[2] = 'The Sixth Sense';
// movies[3] = 'Good Will Hunting';
// movies[4] = 'Mindnight in Paris';
// movies[5] = 'Spirited Away';
// movies[6] = 'Howl\'s Moving Castle';

// let leastFavMovies = [];
// leastFavMovies[0] = 'Life Under the Alien Sun';
// leastFavMovies[1] = 'Chills';
// leastFavMovies[2] = 'Who Caught the bride\'s bouquet';
// console.log("Movies I like:");
// console.log("");
// console.log("");

// for (let movie of movies) {
//     i++;
//     console.log(`Movie ${i}: ${movie}`);
//     if (i === movies.length) {
//         console.log("");
//         console.log("");
//     }
// };

// console.log("Movies I regret watching:");
// console.log("");
// console.log("");

// for (let leastFavMovie of leastFavMovies) {
//     c++;
//     console.log(`Movie ${c} ${leastFavMovie}`);
// };



//STEP 9
// let movies = [];
// movies[0] = 'Chocolat';
// movies[1] = 'The Lord of the Rings';
// movies[2] = 'The Sixth Sense';
// movies[3] = 'Good Will Hunting';
// movies[4] = 'Mindnight in Paris';
// movies[5] = 'Spirited Away';
// movies[6] = 'Howl\'s Moving Castle';

// let leastFavMovies = [];
// leastFavMovies[0] = 'Life Under the Alien Sun';
// leastFavMovies[1] = 'Chills';
// leastFavMovies[2] = 'Who Caught the Bride\'s bouquet';
// console.log("Movies I like and don't like in reversed order:");
// console.log("");

// let newMovies = movies.concat(leastFavMovies).reverse();
// for (let newMovie of newMovies) {
//     console.log(newMovie);
// }

//STEP 10
// let movies = [];
// movies[0] = 'Chocolat';
// movies[1] = 'The Lord of the Rings';
// movies[2] = 'The Sixth Sense';
// movies[3] = 'Good Will Hunting';
// movies[4] = 'Mindnight in Paris';
// movies[5] = 'Spirited Away';
// movies[6] = 'Howl\'s Moving Castle';

// let leastFavMovies = [];
// leastFavMovies[0] = 'Life Under the Alien Sun';
// leastFavMovies[1] = 'Chills';
// leastFavMovies[2] = 'Who Caught the Bride\'s bouquet';

// let newMovies = movies.concat(leastFavMovies).reverse();
// console.log(`The last movie is ${newMovies.slice(-1)} (slice() method)`);

// // or we can also use pop() method:
// console.log(`The last movie is ${newMovies.pop()} (pop() method)`);

//STEP 11
// let movies = [];
// movies[0] = 'Chocolat';
// movies[1] = 'The Lord of the Rings';
// movies[2] = 'The Sixth Sense';
// movies[3] = 'Good Will Hunting';
// movies[4] = 'Mindnight in Paris';
// movies[5] = 'Spirited Away';
// movies[6] = 'Howl\'s Moving Castle';

// let leastFavMovies = [];
// leastFavMovies[0] = 'Life Under the Alien Sun';
// leastFavMovies[1] = 'Chills';
// leastFavMovies[2] = 'Who Caught the Bride\'s bouquet';

// let newMovies = movies.concat(leastFavMovies).reverse();
// console.log(`The first movie is ${newMovies.slice(0, 1)} (slice() method)`);

// // or we can also use pop() method:
// console.log(`The first movie is ${newMovies.shift()} (shift() method)`);

//STEP 12
// let movies = [];
// movies[0] = 'Chocolat';
// movies[1] = 'The Lord of the Rings';
// movies[2] = 'The Sixth Sense';
// movies[3] = 'Good Will Hunting';
// movies[4] = 'Mindnight in Paris';
// movies[5] = 'Spirited Away';
// movies[6] = 'Howl\'s Moving Castle';

// let leastFavMovies = [];
// leastFavMovies[0] = 'Life Under the Alien Sun';
// leastFavMovies[1] = 'Chills';
// leastFavMovies[2] = 'Who Caught the Bride\'s bouquet';

// let newMovies = movies.concat(leastFavMovies).reverse();
// console.log(newMovies.indexOf("Who Caught the Bride\'s bouquet"));
// console.log(newMovies.indexOf("Chills"));
// console.log(newMovies.indexOf("Life Under the Alien Sun"));

// newMovies[newMovies.indexOf("Who Caught the Bride\'s bouquet")] = 'Sherlock Holmes';
// newMovies[newMovies.indexOf("Chills")] = 'The Prestige';
// newMovies[newMovies.indexOf("Life Under the Alien Sun")] = 'The Cipher';

// console.log(`The added movie to 0 index: ${newMovies[0]}.\nThe added movie to 1 index: ${newMovies[1]}.\nThe added movie to 2 index: ${newMovies[2]}.`);

//STEP 13
// let movies = [['Sherlock Holmes', 1], ['Good Will Hunting', 2], ['Spirited Away', 3], ['The Prestige', 4], ['Midnight in Paris', 5]];

// let i;
// for (i = 0; i < movies.length; i++) {

//     let movieList = movies[i].filter(function(movie) {
//        return typeof movie === 'string';
//    });
//    console.log(`${movieList}`);
// }

//STEP 14. DISPLAYING AN ARRAY USING AN ANONIMOUS FUNCTION
// let employees = ['Polina', 'Monica', 'Emma', 'Amber', 'Sarah', 'Matt'];

// let showEmployee = function(employees) {
//     'use strict';
//     console.log('Employees: \n\n');
//     for (let i = 0; i < employees.length; i++) {
//         console.log(`${employees[i].toUpperCase()}`);
//     }
// };
// showEmployee(employees);

//STEP 15
// let values = [58, '', 'abcd', true, null, false, 0];
// let filterValues = values.filter(function(item) {
//     return item !== false && item !== null && item !== 0 && item !== '';
// });
// console.log(filterValues);

//STEP 16
// let nums = [5, 4, 2, 48, 57, 98, 34, 55, 66, 77];
// let randomNumber = nums => {
//     let i = Math.floor(Math.random() * nums.length);
//     console.log(nums[i]);
// };
// randomNumber(nums);

//STEP 17
let nums = [100, -4, -2, -48, -57, -100, -34, 55, 66, 100];

let largestNum = nums => {
    'use strict';
    let newNum;
   for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= nums[i+1]) {
        newNum = nums[i+1];
        } else if (nums[i] > nums[i+1]) {
        newNum = nums[i];
        nums[i+1] = nums[i];
        }
    }   
    console.log(newNum);
};
largestNum(nums);

