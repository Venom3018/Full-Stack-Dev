// // Object Literals...
// const student = {
//     name: "Sumit Swami",
//     age: 25,
//     course: "Full Stack Development"
// };

// const item = {
//     price: 100.99,
//     name: "Laptop",
//     color: ["red", "grey"] // Array inside object - with all primitive data types we can also have data structures inside objects like arrays.
// };

// const post = {
//     username: "@Sumit_Swami",
//     content: "Learning JavaScript is fun!",
//     likes: 100,
//     reposts: 150,
//     mention: ["@apnacollege", "Sigma7.0", "@JavaScript"]
// };

// // Get Values... using .operator & [] with "".
// post["username"];
// post.content;

// // JS converts keys to string automatically.
// const obj = {
//     1: 'a',
//     2: 'b',
//     null: 'c',
//     undefined: 'd',
//     true: ''
// };

// // Update, Add, & Delete...
// console.log(post);
// post.username  = "Sumit07";
// console.log(post);
// delete post.mention;
// console.log(post);
// post.tags = ["@apnacollege", "Sigma7.0", "@JavaScript"];
// console.log(post);

// // Nested object lietrals...
// const user = {
//     sumit: {
//         age: 25,
//         course: "Full Stack Development"
//     },
//     john: {
//         age: 30,
//         course: "Data Science"
//     },
//     alex: {
//         age: 28,
//         course: "Web Development"
//     }
// };

// // Array of objects.
// const userinfo = [
//     {
//         name: "Sumit",
//         age: 25,
//         course: "Full Stack Development"
//     },
//     {
//         name: "John",
//         age: 30,
//         course: "Data Science"
//     },
//     {
//         name: "Alex",
//         age: 28,
//         course: "Web Development"
//     }
// ];

// Guessing the game...

const max = prompt("enter a max number: ");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("guess a number between 1 and " + max);
while(true) {
    if (guess == "quit"){
        break;
    }
    if(guess == random) {
        console.log("Congratulations! You guessed the right number " + random);
        break;
    }else if(guess < random) {
        guess = prompt("Too low! Try again: ");
    }else{
        guess = prompt("Too high! Try again: ");
    }
}