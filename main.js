

// ES6 Logic

// Global Scope

// ● Declare a variable using var outside of any function or block.

// var r = 'car';
// function a1() {

// }


// ● Declare a variable using let outside of any function or block.

// let abc = 'VARIABLE';
// function a2() {

// }


// ● Declare a variable using const outside of any function or block.

// const myName = 'kashan';
// function a3() {

// }

// ● Log all three variables to the console.
// console.log(r);
// console.log(abc);
// console.log(myName);

// ● Are they accessible globally?
// yes but agr hum let or const ko window.abc ya window.myName karen to ye nhi chalenge undefined ka error aye ga q ke var global me window ki object property me add hojata he but let or const nhi hote

// Function Scope

// ● Create a function and declare a variable using var inside the
// function.

// function bbc() {
//     var a = 'apple';
// }

// Declare a variable using let inside the function.

// function bac() {
//     var b = 'apple';
// }


// Declare a variable using const inside the function.
// function cab() {
//     var c = 'apple';
// }

// Try to log all three variables to the console outside the function.
// console.log(a);
// console.log(b);
// console.log(c);

// What do you observe? 
// var let or const q ke function scope hain is liae teenon pr error arah hai 
// a b c is not defined


// Block Scope:



// ● Use an if statement and declare a variable using var inside the
// block.

// if (true) {
//     var m1 = 'HI';

// }


// ● Declare a variable using let inside the block.


// if (true) {
//     let m2 = 'Hello';

// }


// ● Declare a variable using const inside the block.


// if (true) {
//     const m3 = 'BYE';

// }

// Try to log all three variables to the console outside the block.

// console.log(m1);
// console.log(m2);
// console.log(m3);

// ● What do you observe?

// Var block scope nhi  he is lsliae block ke bahir bhi chal gaya lekin let or const block scope hain isliae block ke bahir nhi chale
// Error Agaya m1 , m2 is not defined


// Hoisting with var:

// console.log(message);
// var message = 'Hi Hamza What Are You Doing'

// ● What value do you get?

// Undefined

// Hoisting with let and const:

// Write code where you log a let variable before it is declared.

// console.log(message2);
// let message2 = 'Helllo Sir'

// // Write code where you log a const variable before it is declared.

// console.log(message3);
// const message3 = "Hello Miss"

// ● What kind of error do you get?

//  Uncaught ReferenceError: Cannot access 'message3' before initialization
//  dono pr same error

// Re-declaration:

// ● Try to declare the same variable name twice using var.

// var car = 'Corolla'

// var car = "Revo"


// ● Try to declare the same variable name twice using let.


// let user = 'Kashan'

// let user = "Hamza"

// ● Try to declare the same variable name twice using const.

// const  user2 = "Momina"

// const user2 = "Rizwan"

// ● What happens in each case?

// var se redeclare karne se hogaya but let or const me error agaya 

// Re-assignment:

// ● Declare a variable using var and assign it a value. Then reassign it a
// new value.

// var fruit1 = "apple";
// fruit1 = "banana";
// console.log(fruit1);

// ● Declare a variable using let and assign it a value. Then reassign it a
// new value.

// let fruit2 = "Orange";
// fruit2 = "Mango";
// console.log(fruit2);


// ● Declare a variable using let and assign it a value. Then reassign it a
// new value.

// const fruit3 = "Papaya";
// fruit3 = "Grapes";
// console.log(fruit3);

//  ● What happens in each case?

// var or let me value reassign hogai but const me error agaya 
// Uncaught TypeError: Assignment to constant variable.


// Temporal Dead Zone (TDZ):

// ● Declare a let variable inside a block but try to log it before the
// declaration.


// console.log(city);
// {
//     let city = "Lahore";

// }


// ● Declare a const variable inside a block but try to log it before the
// declaration.

// console.log(city2);
// {
//     const city2 = "Karachi";
// }


// ● What error do you get? Why?

// Uncaught ReferenceError: city is not defined

// Dono pr same error aya q ke let or const me hoisting nhi hoti agr hm ye kam var se karen to hamare pass undefined aaega


// When to use var, let, and const:

// Write a piece of code to demonstrate a good use case for var.

// function countUser(){
//     for(var i = 1 ; i <= 5 ; i++){

//         console.log("Student" ,i);
// }
// console.log("Total Students" , i);
// }
// countUser();

// ● Write a piece of code to demonstrate a good use case for let.

// var age = 18

// if( age >= 18){
//     let message = 'You are Hire'
//     console.log(message);
// }
// else {
//     console.log("Not Hire");
// }

// ● Write a piece of code to demonstrate a good use case for const.

// const defaultAge = 18 ;

// let UserAge = 20;

// if( UserAge >= defaultAge ){
//     console.log("Hire")

// }
// else{
//     console.log("Not Hire")
// }

// String Interpolation:

// ● Create variables for a person's first name and last name.
// const FirstName = "Kashan";
// const LastName = "Saleem";

// // ● Use a template literal to create a full name string and log it to the
// // console.

// // console.log(`My Name is ${FirstName} ${LastName}`);

// // Multi-line Strings:

// // ● Use a template literal to create a multi-line string (e.g., an address) and
// // // log it to the console.

// let address = "Liaquatabad Karachi";
// let Occupation = "Student";

// console.log(`My Name is ${FirstName} ${LastName}
// and I live In ${address}
// and I am a ${Occupation}`

// )

// // Simple Expressions:

// // ● Create variables for two numbers.
// let num1 = 5;
// let num5 = 10;
// // ● Use a template literal to create a string that includes the sum of the
// // numbers.
// let result = `The sum of ${num1} and ${num5} is ${num1 + num5}`;
// // ● Log the string to the console.
// console.log(result);

// // Function Calls:

// // ● Create a function that takes two numbers and returns their product.

// function nums(num1, num2) {
//   return num1 * num2;
// }


// // ● Use a template literal to call this function inside a string and log the
// // result to the console.

// console.log(` the product of 5 and 5 is ${nums(5, 5)}`)

// // Creating a Tagged Template:

// // ● Write a simple tag function that takes a template string and logs it.

// function tagFunc(strings, ...values) {
//   console.log("Strings:", strings);
//   console.log("Values:", values);
// }
// // ● Use this tag function with a template literal.
// const mYname = "Ali";
// const age = 22;

// tagFunc`My name is ${mYname} and I am ${age} years old.`;

// // Formatting:

// function uppercaseFunc(strings, ...values) {

//   let result = ""

//   for (let i = 0; i < strings.length; i++) {
//     result += strings[i];
//     if (i < values.length) {
//       result += values[i];
//     }
//   }
//   return result.toUpperCase;
// }

// const myName2 = "Kashan";
// const institute = 'Jawan Pakistan';

// const output = uppercaseFunc`Hello, my name is ${myName2} and I learn javascript in ${institute}.`;

// // Conditional Logic:

// // ● Create a variable for the current hour.

// let hour = new Date().getHours();


// if (hour < 12) {
//   console.log(`Good Morning The Current time is ${hour}`);
// }
// else {
//   console.log(`Good Afternoon The Current time is ${hour}`);
// }

// // Loops within Template Literals:

// // ● Create an array of items (e.g., a shopping list).

// let arr = ['Shirts', 'Shoes', 'T Shits', "Pents", "Glasses"];

// // ● Use a template literal to generate an HTML list (<ul> and <li>
// // elements) from the array and log it to the console.

// let listItems = "";


// for (let i = 0; i < arr.length; i++) {
//   listItems += `<li>${arr[i]}</li>`;
// }

// let ul = `<ul>${listItems}</ul>`;

// console.log(ul);

// // Escaping Backticks:

// let sentence = `This is \`Backticks\``;
// console.log(sentence);

// // ● Create nested template literals to build a more complex string, such as
// // a nested HTML structure (e.g., a table with rows and cells).

// let rows = `<tr> 
// <td>Items 1 </td>
// <td>Items 2 </td> 
// </tr>
// <tr>
// <td>Items 3 </td>
// <td>Items 4 </td> 
// </tr>
// <tr>
// <td>Items 5 </td> 
// <td>Items 6 </td>
// </tr>
// `
// let table = `<table>${rows} </table>`;
// // ● Log the result to the console.
// console.log(table);

// // Simple Condition:

// // ● Create a variable age.

// let myAge = 18;

// // ● Use the ternary operator to assign a variable canVote the value
// // "Yes" if age is 18 or older, and "No" otherwise.

// let canVote = myAge >= 18 ? "You Can Vote" : "NO You cannot Vote";

// // ● Log canVote to the console.
// console.log(canVote);

// // Even or Odd:

// // ● Create a variable number.

// let number = 43;

// // ● Use the ternary operator to assign a variable evenOrOdd the value
// // "Even" if number is even, and "Odd" if it's odd.

// let evenOrOdd = number % 2 === 0 ? "Even " : "Odd";

// // ● Log evenOrOdd to the console.
// console.log(evenOrOdd);

// // Grade Evaluation:

// // Create a variable score.

// let score = 76

// let grade = score >= 90 ? "A" : score >= 80 ? "B" :
//   score >= 70 ? "C" : score >= 60 ? " D" : "F"

// console.log(grade);

// // Login Status:

// // Create a variable isLoggedIn.

// const loggedIn = false

// // ● Use the ternary operator and logical operators to assign a variable
// // statusMessage the value "Welcome back!" if isLoggedIn is true,
// // and "Please log in" if isLoggedIn is false.

// let StatusMessage = loggedIn ? "Welcome back!" : "Please log in";

// // ● Log statusMessage to the console.
// console.log(StatusMessage);

// // Discount Eligibility:

// // ● Create variables isMember and purchaseAmount.

// const isMember = true;
// let purchaseAmount = 150;

// // ● Use the ternary operator and logical operators to assign a variable
// // discount the value 10% of purchaseAmount if isMember is true
// // and purchaseAmount is greater than 100, and 0 otherwise.


// let discount = (isMember && purchaseAmount >= 100) ? purchaseAmount * 0.10 : "0 Discount";

// console.log(`Your Discount Is ${discount}`);

// // Determine Max Value:

// // ● Create a function maxValue(a, b) that returns the larger of the two
// // numbers using the ternary operator.

// function maxValue(a, b) {
//   return a > b ? a : b
// }

// console.log(maxValue(99, 6))

// // Greeting Message:

// // ● Create a function greet(name) that returns a greeting message. If
// // name is not provided (or is an empty string), it should return "Hello,
// // guest!", otherwise, it should return "Hello, [name]!".



// function greet(name) {
//   return !name ? "Hello, guest!" : `Hello,${name} !`
// }

// // ● Call the function with and without a name and log the result.
// console.log(
//   greet("kashan"));
// console.log(greet())

// // Mapping Values:

// // ● Create an array of numbers. 

// let numArr = [1, , 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // ● Use the map method with a ternary operator to create a new array
// // where each number is doubled if it is even and tripled if it is odd.

// let newArr = numArr.map(num => num % 2 === 0 ? num * 2 : num * 3);
// console.log(newArr)


// // Filtering Values:
// // ● Create an array of strings.
// let stringArr = ['car', 'pen', 'hi', 'key', 'cake', "make", " mouse"]

// // ● Use the filter method with a ternary operator to create a new array
// // that only includes strings with a length greater than 3.


// let newARR = stringArr.filter(string => string.length > 3 ? true : false)
// // ● Log the new array to the console.

// console.log(newARR)


// // Copying an Array:

// // ● Create an array originalArray with some elements.

// let originalArray = [1, " car ", "house ", 3]

// // ● Use the spread operator to create a copy of originalArray called
// // copiedArray.

// let copiedArray = [...originalArray];

// // ● Log both arrays to the console to verify they are the same but not the
// // same reference.

// console.log("original Array", originalArray);
// console.log("Copied Array", copiedArray);
// console.log("Are both same reference?", originalArray === copiedArray);

// // Merging Arrays:
// // ● Create two arrays array1 and array2.
// let array1 = [1, 2, 3, 4, 5]
// let array2 = ['ear', 'nose ', 'lips ,']

// let mergedArray = [...array1, ...array2]

// console.log(mergedArray)

// // Adding Elements to an Array:

// let numbers = [1, 2, 3, 4, 5, 6]

// // ● Use the spread operator to add a new element at the beginning and at
// // the end of the numbers array.

// let newNums = [0, ...numbers, 8]

// console.log(newNums)

// // Copying an Object:

// // ● Create an object originalObject with some key-value pairs.

// let originalObject = {
//   name: 'kashan ',
//   gender: " male ",
//   age: 17
// }

// // ● Use the spread operator to create a copy of originalObject called
// // copiedObject.

// let copiedObject = { ...originalObject }

// console.log("original Array", originalObject);

// console.log("Copied Array", copiedObject);

// console.log("Are both same reference?", originalObject === copiedObject);

// // Merging Objects:

// // ● Create two objects object1 and object2 with some overlapping
// // keys.

// let object1 = { name: "Hamza", age: 25, city: "Karachi" };

// let object2 = { age: 30, city: "Lahore", profession: "Developer" };

// // ● Use the spread operator to create a new object mergedObject that
// // combines the properties of object1 and object2.

// let mergedObject = {...object1 , ...object2 }

// // ● Log mergedObject to the console and note which values are
// // retained for the overlapping keys.


// console.log( mergedObject);

// // Updating Object Properties:

// // ● Create an object user with properties name, age, and email.

// let user = {
//   name: "Ali",
//   age: 25,
//   email: "ali@example.com"
// };

// // ● Use the spread operator to create a new object updatedUser that
// // updates the email property and adds a new address property.

// let updatedUser = { ...user , email:"kashansaleem192.com" , address : "Clifton Karachi"}

// // ● Log the updatedUser object to the console.

// console.log( updatedUser);

// // Passing Array Elements as Arguments:

// // ● Create a function sum(a, b, c) that returns the sum of three
// // numbers.

// function sum( a,b, c ) { 
//   return a + b + c

// }

// // ● Use the spread operator to pass the elements of numbers as
// // arguments to the sum function.

// let numberss  = [ 2,5,6];

// console.log( sum( ...numberss))


// // Combining Multiple Arrays:

// // ● Create a function combineArrays that takes any number of arrays
// // as arguments and returns a single array containing all elements.

// function combineArrays( ...arrays ){
//    let mergedArrays  = []

//    for ( let arr of arrays){
//      mergedArrays = [...mergedArrays, ...arr]
//    }
   
//    return mergedArrays
// }


// console.log(combineArrays([1,2,3] , [4,5,6] ,[6,7,8] ))

// // Spread Operator with Nested Structures:

//  let nestedArray = [ [1,2], [3,4], [5,6] ]

//  let new_nested = [...nestedArray]
//  new_nested[0][0] = 29 
//  new_nested[0][1]= 21

//  console.log( nestedArray)
//  console.log(new_nested)

// //  Sum Function:

// // ● Create a function sum that uses the rest operator to take any number
// // of arguments.

// // ● The function should return the sum of all its arguments.
// // ● Call the function with different numbers of arguments and log the
// // results.

// function sum(...value) {
//   let total = 0;
  
//   for (let num of value) {
//     total += num;

//   }

//   return total;
// }


// console.log(sum(2, 3, 5));  
// console.log(sum(1, 4, 6, 9)); 


// // Average Function:

// // ● Create a function average that uses the rest operator to take any
// // number of arguments.
// // ● The function should return the average of all its arguments.
// // ● Call the function with different numbers of arguments and log the
// // results.


// function average(...num3){

// let result = 0
// for ( let answer of num3){
 
// result += answer / num3.length;

// }
// return result

// }

// console.log(average(2,4,7,8));

// // First and Rest:

// // ● Create an array numbers with at least 5 elements.
// // ● Use array destructuring with the rest operator to assign the first
// // element to a variable first and the remaining elements to a variable
// // rest.
// // ● Log first and rest to the console.

// const numsArray =[2,4,5,7,12]

// const [first , ...rest] = numsArray

// console.log( first)
// console.log( rest)


// Skip and Rest:

// ● Create an array colors with at least 5 elements.
// ● Use array destructuring with the rest operator to skip the first two
// elements and assign the remaining elements to a variable
// remainingColors.
// ● Log remainingColors to the console.

// let colors =["red ", "blue ", "purple","yellow","Green"]

// let [first,second , ...extra] = colors
// console.log(extra)


// Basic Destructuring:

// ● Create an object person with properties name, age, email, and
// address.
// ● Use object destructuring with the rest operator to assign name and
// email to individual variables, and the remaining properties to a
// variable rest.
// ● Log the variables to the console.


// let person ={
//     name : "Shahbaz",
//     age : 25,
//     email: "shahbaz23@gmail.com"
//     ,address : "Lahore Pakistan "
 
// }

// let {  name :newName ,age:NewAge ,...rest } = person;
// console.log(newName, NewAge, rest)

// Nested Destructuring:

// ● Create an object student with properties id, name, grades, and
// info (where info is another object with properties age and major).
// ● Use nested destructuring with the rest operator to extract id, name,
// and major to individual variables, and the remaining properties to a
// variable rest.
// ● Log the variables to the console.

//  let student = { id: 321 , name : "rafay" , grades: "A" , info:{
//     age :12 , major : 23
// }}

// let { id : NewID , name : NewName ,info : {major : NewMajor , ...restInfo},  ...rest} = student
// console.log(NewID, NewName, NewMajor , rest , restInfo)


// Filter Even Numbers:

// ● Create a function filterEven that uses the rest operator to take any
// number of arguments.
// ● The function should return a new array containing only the even
// numbers.
// ● Call the function with different numbers of arguments and log the
// results.

