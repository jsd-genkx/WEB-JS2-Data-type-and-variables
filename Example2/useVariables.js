//------------------------Store Data---------------------//

// function storeData(num1,num2) {
//     let sum = num1+num2;
//     return (sum);
// }

// let result = storeData(10,8);
// console.log (result);


// function product_total_value (unit_price, quantity_in_stock){
//     let product_total_value = unit_price * quantity_in_stock;
//     return (TotalValue)
// }
//     let Total = product_total_value(1.50, 100);
//     console.log(Total);

//-----------------------User Input----------------------//
// // Ask the user for their name
// let firstName = prompt("What is your name?");

// // Greet the user
// alert("Hello, " + firstName + "!");


//---------------------Reusing Values-------------------//
// Declare a variable
// let taxRate = 0.07;

// // Calculate the tax for different amounts
// let unit_price1 = 100;
// let tax1 = unit_price1 * taxRate;
// console.log("The tax on " + unit_price1 + " is " + tax1.toFixed(2));

// let unit_price2 = 200;
// let tax2 = unit_price2 * taxRate;
// console.log("The tax on " + unit_price2 + " is " + tax2.toFixed(2));

// let unit_price3 = 300;
// let tax3 = unit_price3 * taxRate;
// console.log("The tax on " + unit_price3 + " is " + tax3.toFixed(2));

//--------------------------Control Flow--------------------//

// Declare a variable
// let quantity_in_stock = 20;

// // Use the variable in a conditional statement
// if (quantity_in_stock > 10) {
//     console.log('Quantity in stock = ' + quantity_in_stock + " is positive.");
// } else if (quantity_in_stock < 0) {
//     console.log('Quantity in stock = ' + quantity_in_stock + " is negative.");
// } else {
//     console.log(number + " is zero.");
// }

//----------------------------Iteration-----------------------//
// Declare a variable for the number of iterations
// let iterations = 5;

// // Use a for loop to print the numbers
// for (let i = 1; i <= iterations; i++) {
//     console.log(i);
// }

// let unit_prices = [3, 5, 7]; // Different unit prices for different products

// function applyDiscount(discountPercentage) {
//     for (let i = 0; i < unit_prices.length; i++) {
//         let new_price = unit_prices[i] * (1 - discountPercentage);
//         console.log(`New price for product ${i + 1} after discount: ${new_price.toFixed(2)}`);
//         unit_prices[i] = new_price; // Update the original price with the discounted price
//     }
// }

// applyDiscount(0.10);  // Apply a 10% discount to each product price

