// //String methods - .trim()
// let password = prompt("Enter your password: ");
// let newpassword = password.trim();
// console.log("Your password is: " + newpassword);

// // Strings are immutable.
// let msg = "hello";
// msg[0] = "H";
// console.log(msg);
// msg = "Hello"; // Reassigning the variable

// // toLowerCase();
// // toUpperCase();

// let name = "SUMIT SWAMI";
// let msg = "error";
// console.log(name.toLowerCase());
// console.log(msg.toUpperCase());

// // indexof.
// let str = "Hello, World!";
// console.log(str.indexOf("World"));

// // Method Chaining.
// let msg = "   Hello   ";
// console.log(msg.trim().toUpperCase());

// // Slice.
// let msg = "Hello, World!";
// // console.log(msg.slice(0, 5));
// // console.log(msg.slice(7)); 
// // console.log(msg.slice(7, 13));
// console.log(msg.slice(7, msg.length)); 

// //replace.
// let msg = "Hello, World!";
// console.log(msg.replace("World!", "Sumit!").repeat(3));

// // Practice Questions.
// let msg = "   Help!   ";
// console.log(msg.trim().toUpperCase());

// let name = "ApnaCollege";
// console.log(name.replace('l', 't'));

// // Array's (Data Structures).
// let interns = ["Sumit", "Anushka", "Suraj", "Anshul"];
// // Creating Arrays...
// let marks = [85, 90, 78, 88];
// let names = ["Sumit", "Anushka", "Suraj", "Anshul"];
// let stud1 = ["Sumit", 21, 5.11]; // Mixed...

// let arr = []; // empty array...
// console.log(marks);
// console.log(names);
// console.log(stud1);

// typeof(marks); // "object"
// names.length; // 4
// // mutable.
// let fruit = ["Apple", "Banana", "Mango"];
// console.log(fruit[0]);
// console.log(fruit);
// fruit[0] = "Grapes";

// // Array Methods.
// let cars = ["BMW", "Mercedes", "Toyota", "Honda"];
// console.log(cars);
// cars.push("Audi"); //push-add
// console.log(cars);
// cars.pop(); //pop-delete
// console.log(cars);
// cars.unshift("Honda"); // unshift-shift to start
// console.log(cars);
// cars.shift(); // shift-remove from start & returns
// console.log(cars);

// // Practice Questions.
// let months = ["january", "july", "march", "august"];
// console.log(months);
// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");

// // includes function.
// let cars = ["BMW", "Mercedes", "Toyota", "Honda"];
// console.log(cars.includes("BMW"));
// console.log(cars.includes("Audi"));

// // concat & reverse,
// let primary = ["red", "green", "blue"];
// let secondary = ["orange", "purple", "cyan"];
// let mixed = primary.concat(secondary);
// console.log(mixed);

// console.log(mixed.reverse()); // changes original array.

// // splice
// let cars = ["BMW", "Mercedes", "Toyota", "Honda", "ferrari", "audi"];
// cars.splice(5);
// cars.splice(0, 1);
// cars.splice(1, 2, "Lamborghini", "Bugatti");

// // sort().
// let chars = ["b", "d", "a", "c"];
// chars.sort();
// console.log(chars);
// let num = [1,8,88,96,3];
// num.sort();

// // Practice Questions.
// let months = ["january", "july", "march", "august"];
// // months.splice(1, 1);
// months.splice(0, 2, "july", "june");
// let languages = ['c', 'c++', 'HTML', 'javascript', 'python', 'java', 'c#', 'sql'];
// // languages.reverse();
// console.log(languages);
// console.log(languages.reverse().indexOf("javascript"));

// Practice Questions.
let tictoe = [['X', null, 'O'],[null, 'X', null],['O', null, 'X']];
