/**
 * Exercise 3 : Destructuring and Spread Operators
 *
 * How to execute your code ?
 * Write your solution, then run the following command in your terminal:
 *      node exercise3.mjs
 */

const userProfile = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  settings: {
    theme: "light",
    notifications: true,
  },
};

const newInfo = {
  lastName: "Smith",
  settings: {
    theme: "dark",
  },
};

const albumData = {
  name: "Thriller",
  artist: "Michael Jackson",
  releaseYear: 1982,
  tracks: [
    "Wanna Be Startin' Somethin'",
    "Baby Be Mine",
    "The Girl Is Mine",
    "Thriller",
    "Beat It",
  ],
};

// Your code here

const user = { fisrtname: "Jane", lastname: "Doe" };
const { firstName, lastName } = user;
console.log(firstName); 
console.log(lastName);