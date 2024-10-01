//------------------------Store Data & Reusing Values---------------------//

// function storeData(num1,num2) {
//     let sum = num1+num2;
//     return sum;
// }

// let result = storeData(10,8);
// console.log(result);

// result = result * 100
// console.log(result);

//-----------------------User Input----------------------//
// Ask the user for their name
// let firstName = prompt("What is your name?");

// Greet the user
// alert("Hello, " + firstName + "!");

//--------------------------Control Flow--------------------//

// // Declare a variable
// let quantityInStock = 20;

// // Use the variable in a conditional statement
// if (quantityInStock > 10) {
//     console.log('Quantity in stock = ' + quantityInStock + " is positive.");
// } else if (quantityInStock < 0) {
//     console.log('Quantity in stock = ' + quantityInStock + " is negative.");
// } else {
//     console.log(number + " is zero.");
//}

//----------------------------Iteration-----------------------//
// Declare a variable for the number of iterations
// let iterations = 5;

// // Use a for loop to print the numbers
// for (let i = 1; i <= iterations; i++) {
//     console.log(i);
// }

// let unitPrices = [3, 5, 7]; // Different unit prices for different products

// function applyDiscount(discountPercentage) {
//     for (let i = 0; i < unitPrices.length; i++) {
//         let new_price = unitPrices[i] * (1 - discountPercentage);
//         console.log(`New price for product ${i + 1} after discount: ${new_price.toFixed(2)}`);
//         unitPrices[i] = new_price; // Update the original price with the discounted price
//     }
// }

//  applyDiscount(0.10);  // Apply a 10% discount to each product price

