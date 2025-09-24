/**
 * Exercise 1 : String and Array Manipulation
 *
 * How to execute your code ?
 * Write your solution, then run the following command in your terminal:
 *      node exercise1.mjs
 */

// Expected result:
// [ 'Mobile phone', 'Laptop computer', 'Headphones', 'Smartwatch' ]

const products = [
  "mobile phone",
  "laptop computer",
  "Headphones",
  "smartwatch",
];

// Your code here
console.log(products);



// ======= EXERCICE READ ME =========

// Exercise 1: Data Manipulation 

// But: Manipulation de MAP (transformer un tableau) FILTER garder seulement certains éléments d’un tableau) REDUCE (réduire un tableau à une seule valeur)

const users = [
  { id: 1, name: "Alice", age: 28, specialty: "Marketing" },
  { id: 2, name: "Bob", age: 35, specialty: "Engineering" },
  { id: 3, name: "Charlie", age: 22, specialty: "Marketing" },
  { id: 4, name: "David", age: 42, specialty: "Engineering" },
  { id: 5, name: "Eve", age: 29, specialty: "Design" },
];

// User Names: Create a new variable userNames that contains an array with only the names of all users.

const userNames = users.map(user => user.name );
console.log(userNames);

//Engineers: Create a new variable engineers that contains an array of user objects working in the

const engineers = users.filter(user => user.specialty == "Engineering");
console.log(engineers);

//Average Age: Calculate the average age of all users and store it in a variable averageAge.

const averageAge = users.reduce((acc, user) => acc + user.age , 0)/ users.length;
console.log(averageAge);

//User Descriptions: Create a new variable userDescriptions which is an array of strings describing each user.

const userDescriptions = users.map (user => user.name + " is " + user.age + " years old and is in the " + user.specialty + " field." );
console.log(userDescriptions);


// Exercise 2: Asynchronicity

// But savoir :
// Les Promises → un objet qui représente une valeur qui arrivera plus tard 
// setTimeout → simuler un délai (comme si on attendait une réponse d’un serveur).
// async/await → écrire du code asynchrone de manière lisible.
// try…catch → gérer les erreurs quand la Promise échoue.

// Simulation Function: Create an asynchronous function named WorkspaceUserProfile. 
// This function will take a userId as a parameter.
// Simulate Latency: Inside the function, use new Promise and setTimeout to simulate a network call that takes 2 seconds to respond.
// Result: If the userId is 123, the promise should resolve with an object { name: 'John Doe', status: 'Active' }. 
// For any other userId, the promise should reject with a new Error('User not found').
// Function Call: Call this function with a valid userId, and then with an invalid userId, using async/await and 
// a try...catch block to properly handle the response and errors. Log the results or errors to the console.


async function WorkspaceUserProfile(userId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("Réponse après 2 secondes !");
        }, 2000);
    });

}

WorkspaceUserProfile(123).then ( result => { 
    console.log(result);
});