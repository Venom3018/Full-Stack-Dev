// // Q1
// let arr = [1, 2, 3, 4, 5];
// let sum = 2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i] == sum){
//         arr.splice(i,1);
//     }
//     console.log(arr[i]);
// }

// // Q2
// let number = 287152;
// let count = 0;
// let copy = number;

// while (copy > 0) {
//   count++;
//   copy = Math.floor(copy / 10);
// }

// console.log(`Number of digits: ${count}`); // 6

// // Q3
// let number = 287152;
// let sum = 0;
// let copy = number;

// while (copy > 0) {
//   digit = copy % 10;
//   sum += digit;
//   copy = Math.floor(copy / 10);
// }

// console.log(`Sum of digits: ${sum}`); 

// // Q4
// let n = 5;
// let factorial = 1;
// for(let i=1;i<=n;i++) {
//     factorial *= i;
// }
// console.log(`Factorial of ${n} is ${factorial}`); 

// Q5
let arr = [1, 2, 3, 4, 5];
let largest = 0;
for( let i=0;i<arr.length;i++){
    if(largest < arr[i]){ 
        largest = arr[i];
    }
    console.log(largest);
}