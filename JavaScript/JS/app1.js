// // Arithmetic Operations.
// let a = 10;
// let b = 20;
// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);
// console.log("Exponentiation:", a ** b);

// //Unary Operators.
// console.log(a++);
// console.log(++a);

// //Assignment Operators.
// a += 5;
// console.log("After += 5:", a);
// a -= 3;
// console.log("After -= 3:", a);
// a *= 2;
// console.log("After *= 2:", a);
// a /= 4;
// console.log("After /= 4:", a);

// //Comparison Operators.
// console.log("Equal:", a == b);
// console.log("Not Equal:", a != b);
// console.log("Strict Equal:", a === b);
// console.log("Strict Not Equal:", a !== b);
// console.log("Greater Than:", a > b);
// console.log("Less Than:", a < b);
// console.log("Greater Than or Equal To:", a >= b);
// console.log("Less Than or Equal To:", a <= b);

// //Conditional Statements - if.
// console.log("before if statement code.");
// let age = 16;
// if (age >= 18) {
//     console.log("You are an adult.");
//     console.log("You are eligible to vote.");
//     console.log("You can drive a car.");
// }
// console.log("after if statement code.");
// if (age < 18) {
//     console.log("You are not an adult.");
//     console.log("You are not eligible to vote.");
//     console.log("You cannot drive a car.");
// }

// let firstName = "Sumit";
// if (firstName === "Sumit") {
//     console.log(`Hello, ${firstName}!`);
// }

// //Practice Q1.
// let color = "green";
// if (color == "red") {
//     console.log("Stop 🔴");
// }
// if(color == "yellow") {
//     console.log("Slow down 🟡");
// }
// if(color == "green") {
//     console.log("Go 🟢");
// }

// //Conditional Statements - else-if.
// let marks = 75;
// if (marks >= 80) {
//     connsole.log("Grade A+");
// }
// else if (marks >= 70) {
//     console.log("Grade A");
// }
// else if (marks >=60) {
//     console.log("Grade B");
// }
// else if (marks >= 50) {
//     console.log("Grade C");
// }
// else if (marks >= 40) {
//     console.log("Grade D");
// }
// else if (marks <= 33) {
//     console.log("Grade F (Fail)");
// }

// //Conditional Statements - else.
// let age = 21;
// if(age >= 18) {
//     console.log("You are an adult.");
//     console.log("You are eligible to vote.");
//     console.log("You can drive a car.");
// }else{
//     console.log("You are not an adult.");
//     console.log("You are not eligible to vote.");
//     console.log("You cannot drive a car.");
// }

// //Practice Q2.
// let Size = 'XL';
// if(Size === 'XL') {
//     console.log("Price: 250rs");
// }
// else if (Size === 'L') {
//     console.log("Price: 200rs");
// }
// else if (Size === 'M') {
//     console.log("Price: 100rs");
// }
// else {
//     console.log("Price: 50rs");
// }

// //Nested-if-else.
// let marks = 80;
// if(marks >= 33) {
//     console.log("Pass");
//     if(marks >= 80) {
//         console.log("Grade O");
//     }else{
//         console.log("Grade A")
// }
// }    
// else{
//     console.log("Better luck next time!");
// }

// //Logical Operators - AND (&&).
// let marks = 75;
// if(marks >= 33 && marks >= 80) {
//     console.log("Pass");
//     console.log("Grade A");
// }

// //Logical Operators - OR (||).
// let marks = 15;
// if(marks >= 33 || marks >= 80) {
//     console.log("Pass");
//     console.log("Good Grade");
// }

// //Logical Operators - NOT (!).
// let isRaining = false;
// if(!isRaining) {
//     console.log("It's a nice day!");
// }

// let marks = 80;
// if(!(marks < 33)) {
//     console.log("Pass");
// }

// //Practice Q3.
// let goodString = "a This is a good string.";
// if (goodString.startsWith('a') && (goodString.length > 3)) { // goodString[0] === 'a'
//     console.log("Good string detected.");
// }else{
//     console.log("Not a good string.");
// }

// let num = 12;
// if((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))) {
//     console.log("safe");
// }else{
//     console.log("unsafe");
// }

// //Switch.
// let day = 7;
// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// //alerts & prompts.
// alert("This is a simple page.");
// console.warn("This is a warning message.");
// console.error("This is an error message.");
// console.log("This is a normal message.");
// console.info("This is an informational message.");
// console.debug("This is a debug message.");

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let msg = `Hello, ${firstName} ${lastName}!`;
// alert(msg);
