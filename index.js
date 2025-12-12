// Write an arrow function that takes an array and returns only the even numbers.
// Input: [1, 2, 3, 4, 5, 6]
// Expected Output: [2, 4, 6]

// let arr =[1, 2, 3, 4, 5, 6 , 7,8,9,10];
// const evenNum = arr.filter( num => num % 2=== 0) 
// {
//     console.log(evenNum)
// }

// Write an arrow function that takes a string and returns it reversed.
// Input: "hello"
// Expected Output: "olleh"

// const string = (str) => {
//  return str.split('').reverse().join('');
// }
// console.log(string("Hello"));

// Write an arrow function that removes duplicate values from an array of numbers.

// let arr =[1, 2 ,4 ,3 ,5, 2, 3, 4, 5, 6 , 7,8,9,10];

// const removeDuplicates = ( array ) => [...new Set(array)];
// console.log(removeDuplicates(arr))


// Write an arrow function that takes an array of user objects and returns a new array containing only id and name of each user.

// const users = [
//   { id: 1, name: "Alice", password: "123" },
//   { id: 2, name: "Bob", password: "456" },
//   { id: 3, name: "John", password: "436" }
// ];
// const formatUsers = (arr) => arr.map(user => ({id : user.id , name : user.name}));
// console.log(formatUsers(users))

// Write an arrow function that checks if a user with a given email exists in an array of user objects. Return true if found, otherwise false.

// const users = [
//   { email: "a@test.com" },
//   { email: "b@test.com" }
// ];

// const userExists = (arr, email) => arr.some(user => user.email === email);

// console.log(userExists(users ,'a@test.com'));
// console.log(userExists(users,'f@test.com'));

// Write an arrow function that calculates the total price of all products in an array of objects. Each object has a name and price.



// const products = [
//     {name : "Book" , price : 100},
//     {name : "pen " , price : 50}
// ];

// const totalPrice = (arr) => arr.reduce((sum ,item)=> sum+item.price ,0)
// console.log(totalPrice(products))

// Arrow function to filter out only admin users from an array. Common in role-based backend logic.

// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" }
// ];

// const getAdmins = (arr) => arr.filter(user => user.role === "admin");

// console.log(getAdmins(users));

// Write an arrow function that creates a shallow copy of an object.


// const original = { 
//   name: "Ali", 
//  address:{ city: "Karachi",
//    zip: 12345 }
// };

// let shallowCopy = {...original}
// shallowCopy.address.city = "Multan";
// console.log(original.address.city)


// Write an arrow function that updates a nested property in an object without affecting the original object.

// const deepCopy = (obj) => (structuredClone(obj) );

// const original = {name: "Ali",address: {city: "Karachi",zip: 12345}

// };
// const copy = deepCopy(original);
// copy.address.city = "Lahore";
// console.log(original.address.city);
// console.log(copy.address.city);

