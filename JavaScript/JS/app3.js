// // for-loops...
// for(let i=1;i<=5;i++) {
//     console.log(i);
// }

// for(let j=10;j>=1;j--) {
//     console.log(j);
// }

// // Print all odd numbers 1 to 15.
// for(let odd=1;odd<=15;odd++) {
//     if(odd % 2 != 0) {
//         console.log(odd);
//     }
// }

// for(let odd=1;odd<=15;odd = odd + 2) {
//         console.log(odd);
// }

// console.log("Backwards.");

// for(let odd=15;odd>=1;odd = odd - 2) {
//     console.log(odd);
// }

// // Print all even numbers.
// for(let even=2;even<=10;even++) {
//     if(even % 2 == 0) {
//         console.log(even);
//     }
// }
// console.log("Backwards")
// for(let even=10;even>=1;even = even - 2) {
//         console.log(even);
// }

// // Print Multiplication table...
// for(let table=5;table<=50;table = table + 5) {
//     console.log(table);
// }

// let n = prompt("Enter a number:");
// n = parseInt(n);
// for(let i=n;i<=n*10;i=i+n) {
//     console.log(i);
// }

// // While-loops...
// let i = 2;
// while(i<=20) {
//     console.log(i);
//     i = i + 2;
// }

// // Favorite movie...
// let favoriteMovie = "Inception";
// let guess = prompt("Guess my favorite movie:");
// while((guess !== favoriteMovie)&&(guess !== "Exit")) {
//     guess = prompt("Wrong! Try again:");
// }
// if (guess === "Exit") {
//     alert("You exited the game.");
// } else {
//     alert("Correct! My favorite movie is " + favoriteMovie);
// }

// // Favorite movie using break...
// let favoriteMovie = "Inception";
// let guess = prompt("Guess my favorite movie:");
// while(guess !== favoriteMovie) {
//     if(guess === "Exit") {
//         console.log("You exited the game.");
//         break;
//     }
//     guess = prompt("Wrong! Try again:");
// }
// if(guess === favoriteMovie) {
//     console.log("Correct! My favorite movie is " + favoriteMovie);
// }

// // Loops with Arrays...
// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// for(let i=fruits.length-1;i>=0;i--) {
//     console.log(i, fruits[i]);
// }

// // Nested loops - Arrays.
// let heroes = [
//     ["Superman", "Clark Kent", "Wonder Woman"],
//     ["Batman", "Bruce Wayne"]
// ];
//  for(let i=0;i<heroes.length;i++) {
//     console.log(`List #${i}`);
//     for(let j=0;j<heroes[i].length;j++) {
//         console.log(` ${j}: ${heroes[i][j]}`);
//     }
//  }

// let students = [
//     ["Alice", "A"],
//     ["Bob", "B"],
//     ["Charlie", "C"]
// ];

// for(let i=0;i<students.length;i++){
//     console.log(`Student info #${i}`);
//     for(let j=0;j<students[i].length;j++) {
//         console.log(` ${j}: ${students[i][j]}`);
//     }
// }

// // for-of loop
// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// for(fruit of fruits) {
//     console.log(fruit);
// }

// for(char of "Hello") {
//     console.log(char);
// }

// // nested for of loops in an array.
// let heroes = [
//     ["Superman", "Clark Kent", "Wonder Woman"],
//     ["Batman", "Bruce Wayne"]
// ];
// for(list of heroes){
//     for(hero of list) {
//         console.log(hero);
//     }
// }

// To do App...

let todo = [];

let req = prompt("Please enter your request: ");

while(true) {
    if(req == "Exit"){
        console.log("Exiting the To-Do App.");
        break;
    }

    if(req == "List"){
        console.log("---------------------");
        for(let i=0;i<todo.length;i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("---------------------");
    }else if(req == "Add"){
        let task = prompt("Enter a new task: ");
        todo.push(task);
        console.log(`"${task}" added to the list.`);
    }else if(req == "Delete"){
        let idx = prompt("Enter the index of the task to delete: ");
        todo.splice(idx, 1);
        console.log(`Task at index ${idx} deleted.`);
    }else{
        console.log("Invalid request.");
    }
    
    req = prompt("Please enter your request: ");
}