console.log("js run the code without error");

// var nums = [1, 3, 5];
// var target = 4;
// var twoSum = function (nums, target) {

//   return nums;
// };

// //[0,1] this should be output

// var box5 = {
//   color: "green",
//   position: 1,
//   clickMe: function () {
//     var self = this;
//     document.querySelector("#div1").addEventListener("click", function () {
//       var str =
//         "This is box number " + self.position + " " + "and it is " + self.color;
//       alert(str);
//     });
//   },
// };
// box5.clickMe();

//Es6 ero function

// const box6 = {
//   color: "green",
//   position: 1,
//   clickMe: function () {
//     document.querySelector("#div1").addEventListener("click", () => {
//       var str =
//         "This is box number " + this.position + " " + "and it is " + this.color;
//       alert(str);
//     });
//   },
// };
// box6.clickMe();

// function Person(name) {
//   this.name = name;
// }

// //ES5
// Person.prototype.myFriends5 = function (friends) {
//   var arr = friends.map(function (el) {
//     return this.name + " is friends with " + el;
//   });
//   console.log(arr);
// };
// var friends = ["Bob", "jane", "mark"];
// new Person('jhon').myFriends5(friends);

//ES6
// Person.prototype.myFriends5 = function (friends) {
//   var arr = friends.map((el) => {
//     return this.name + " is friends with " + el;
//   });
//   console.log(arr);
// };

//ES5
// var arr = ["shubham", 20];
// var name = arr[0];
// var age = arr[1];

// //Es6 Destructuring.

// var [name, age] = ["shubham", 26];

// const boxes = document.querySelectorAll("div");

// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function (cur) {
//   cur.style.backgroundColor = "red";
// });

// //ES6
// const boxesArr6 = Array.from(boxes);

// const arr = ["a", "b", "c", "d"];

// const arr2 = ["dd", ...arr];

// console.log(arr2);
// const joinFamily = ["d", ...familyShubham];

// function isFullAge5() {
//   var argsArr = Array.prototype.slice.call(arguments);
//   console.log(argsArr);

//   argsArr.forEach(function (cur) {
//     console.log(2016 - cur >= 18);
//   });
// }
// isFullAge5(1999, 2000, 1997);

// ES6

// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
//   }
// }

// var john = new Person6("john", 1999, "web developer");

// class Element {
//   constructor(name, buildYear) {
//     this.name = name;
//     this.buildYear = buildYear;
//   }
// }

// class Park extends Element {
//   constructor(name, buildYear, area, numTress) {
//     super(name, buildYear);
//     this.area = area;
//     this.numTress = numTress;
//   }
//   treeDensity() {
//     const density = this.name / this.area;
//     console.log(
//       `${this.name} has a tree density of ${density} trees per square km`
//     );
//   }
// }

// class Street extends Element {
//   constructor(name, buildYear, length, size) {
//     super(name, buildYear);
//     this.length = length;
//     this.size = size;
//   }
//   classifyStreet() {
//     const classification = new Map();
//     classification.set(1, "tiny");
//     classification.set(2, "small");
//     classification.set(3, "normal");
//     classification.set(4, "big");
//     classification.set(5, "huge");
//     console.log(
//       `${this.name}, build in ${this.buildYear}, is a ${classification.get(
//         this.size
//       )} street `
//     );
//   }
// }
// const allParks = [
//   new Park("Green park", 1987, 0.2, 215),
//   new Park("National park", 1984, 2.9, 3455),
//   new Park("Oak park", 1953, 0.4, 949),
// ];
// const allStreets = [
//   new Street("ocean Avenue", 1999, 1.1, 4),
//   new Street("Evergreen street", 2399, 11, 40),
//   new Street("4th street", 2000, 21, 0.3),
//   new Street("Last Sunsetgreen", 1983, 31, 5),
// ];

// function calc(arr) {
//   const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
//   return [sum, sum / arr.length];
// }

// function reportPark(p) {
//   console.log("-------parks report-----------");
//   //Density
//   p.forEach((el) => el.treeDensity());

//   //Average  age
//   const ages = p.map((el) => new Date().getFullYear() - el.buildYear);
//   const [totalAge, avgAvg] = calc(ages);

//   console.log(`Our ${p.length} parks have an average of ${avgAvg} years`);

//   //which park has more than 1000 trees
// }
// function reportStreet(s) {}

// reportPark(allParks);
// reportStreet(allStreets);

// const second = () => {
//   setTimeout(() => {
//     console.log("async hey there");
//   }, 2000);
// };

// const first = () => {
//   console.log(`hey there`);
//   second();
//   console.log("the end");
// };
// first();

// function getRecipe() {
//   setTimeout(() => {
//     const recipeId = [43, 76, 98, 12];
//     console.log(recipeId);

//     setTimeout(
//       (id) => {
//         const recipe = {
//           title: "fresh pasta",
//           publisher: "shubham",
//         };
//         console.log(`${id} :  ${recipe.title}`);
//       },
//       1000,
//       recipeId[2]
//     );
//   }, 2000);
// }
// getRecipe();

// const getIDs = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([43, 76, 98, 12]);
//   }, 1000);
// });
// const getRecipe = (recID) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (id) => {
//         const recipe = {
//           title: "fresh pasta",
//           publisher: "shubham",
//         };
//         resolve(`${ID}: ${recipe.title}`);
//       },
//       2000,
//       recID
//     );
//   });
// };

// getIDs
//   .then((IDs) => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//   })
//   .then((recipe) => {
//     console.log(recipe);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function getRecipesAW() {
//   const IDs = await getIDs;
//   console.log(IDs);
// }
// getRecipesAW();

// fetch(
//   "https://crossorigin.me/https://www.metaweather.com/api/location/2487956/"
// )
//   .then((result) => {
//     console.log(result);
//   })

//   .catch((error) => {
//     console.log(error);
//   });

