/**
 * Exercise 2 : Using Objects and Arrow Functions
 *
 * How to execute your code ?
 * Write your solution, then run the following command in your terminal:
 *      node exercise2.mjs
 */

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

console.log( "The album " + albumData.name + " was written by " + albumData.artist + " in " + albumData.releaseYear + " and here are some tracks: " + albumData.tracks);

const tracklist = albumData.tracks.map(track => "Track " + track);
console.log(tracklist);
