//object

const person = {
    firstName: 'John',
    age: 30,
    gender: 'male',
    isEmployed: true
  };

  // Using dot notation to access properties:
console.log(person.firstName);      // Output: 'John'
console.log(person.age);       // Output: 30
console.log(person.gender);    // Output: 'male'
console.log(person.isEmployed);// Output: true

// Using bracket notation to access properties:
console.log(person['firstName']);      // Output: 'John'
console.log(person['age']);       // Output: 30
console.log(person['gender']);    // Output: 'male'
console.log(person['isEmployed']);// Output: true

//assign a new value
person.age = 31;
console.log(`${person.firstName} is ${person.age} years old`)

// Adding a new key and value
person.hobby = "reading";
console.log(person.hobby);



// Removing a key-value pair
delete person.age;
console.log(person);

// const car = {
//     make: 'Toyota',
//     model: 'Corolla',
//     year: 2022,
//     features: ['Air conditioning', 'Power windows'],
//     owner: {
//       name: 'Lak',
//       age: 25,
//       gender: 'female'
//     }
// };

// // Using dot notation to access properties:
// console.log(car.make); // Output: 'Toyota'
// console.log(car.model); // Output: 'Corolla'
// console.log(car.year); // Output: 2022
// console.log(car.features); // Output: ['Air conditioning', 'Power windows']

// // Using bracket notation to access properties:
// console.log(car['make']); // Output: 'Toyota'
// console.log(car['model']); // Output: 'Corolla'
// console.log(car['year']); // Output: 2022
// console.log(car['features']); // Output: ['Air conditioning', 'Power windows']

// //Accessing nested properties
// console.log(car.owner.name); // Output: 'Alice' (using dot notation)
// console.log(car['owner']['age']); // Output: 25 (using bracket notation)
// console.log(car['owner']['gender']); // Output: 'female' (using bracket notation)

//

// //Object with Method
// const mobilePhone = {
//   brand: 'Samsung',
//   model: 'Galaxy S21',
//   year: 2021,
//   color: 'Phantom Gray',
//   isDualSIM: true,
//   features: ['5G connectivity', 'AMOLED display', 'Quad-camera setup'],
//   ring: firstName => {
//       if (firstName === 'Lak'){
//           console.log('Ring! Ring! ☠️');
//       } else {
//           console.log("Beep! Beep! 🥰");
//         }
//   }, 
//   text: function()
//   {
//     console.log('Hello');
//   }

// };

// //use dot notation to access the properties
// console.log(mobilePhone.brand); // Output: 'Samsung'
// console.log(mobilePhone.model); // Output: 'Galaxy S21'
// console.log(mobilePhone.year); // Output: 2021
// console.log(mobilePhone.color); // Output: 'Phantom Gray'
// console.log(mobilePhone.isDualSIM); // Output: true
// console.log(mobilePhone.features[0]); // Output: ['5G connectivity']

// //access method
// mobilePhone.ring('Lak');
// mobilePhone.text(); 


// //many object
// const mobilePhone = {
//     brand: 'Samsung',
//     model: 'Galaxy S21',
//     year: 2021,
//     color: 'Phantom Gray',
//     isDualSIM: true,
//     features: ['5G connectivity', 'AMOLED display', 'Quad-camera setup'],
//     ring: function() {
//       console.log('Ring! Ring!');
//     },
//     anotherModel: {
//       brand: 'Apple',
//       model: 'iPhone 13',
//       year: 2021,
//       color: 'Midnight Blue',
//       isDualSIM: false,
//       features: ['A15 Bionic chip', 'Super Retina XDR display'],
//       ring: function() {
//         console.log('Ring! Ring!');
//       }
//     }
//   };

// console.log(mobilePhone.model); // Output: 'Galaxy S21'
// console.log(mobilePhone.features); // Output: ['5G connectivity', 'AMOLED display', 'Quad-camera setup']

// mobilePhone.ring(); // Output: 'Ring! Ring!'

// console.log(mobilePhone.anotherModel.model); // Output: 'iPhone 13'
// console.log(mobilePhone.anotherModel.features); // Output: ['A15 Bionic chip', 'Super Retina XDR display']

// mobilePhone.anotherModel.ring(); // Output: 'Ring! Ring!'

// console.log(mobilePhone.anotherModel.brand); // Output: 'Apple'
// console.log(mobilePhone.anotherModel.year); // Output: 2021
