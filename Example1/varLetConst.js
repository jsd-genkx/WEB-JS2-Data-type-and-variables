//-------------------------------------------Inventory--------------------------------------
// let quantityInStock = 100;
// console.log("Initial Quantity:", quantityInStock); // Output: 100

// quantityInStock = quantityInStock - 50;
// console.log("Updated Quantity:", quantityInStock); // Output: 50

// quantityInStock += 500;
// console.log("Updated Quantity:", quantityInStock); // Output: 550

// quantityInStock++; 
// console.log("Updated Quantity:", quantityInStock); // Output: 551


// let productName = 'Oat Milk';
// console.log("Product Name:", productName);

// // //Change product name
// productName = "Soya Milk";
// console.log("New Product Name:", productName);


// const productId = 1;
// console.log("Product ID:", productId); // Output: 1

// // // Attempting to reassign the product ID will result in an error
// productId = 2; // Error: Assignment to constant variable.


// var discountPercentage = 10;
// console.log("Discount Percentage:", discountPercentage); // Output: 10

// // // Modifying the discount percentage
// discountPercentage = 15;
// console.log("Updated Discount Percentage:", discountPercentage); // Output: 15




// //-------------------------------------------Scope-------------------------------------
//  let quantityInStock =   300;
// {
//   let quantityInStock = 100;
//   console.log("Initial Quantity:", quantityInStock); // Output: 100

//   // Simulating a purchase where the quantity decreases
//   quantityInStock = quantityInStock - 30;
//   console.log("Updated Quantity:", quantityInStock); // Output: 50
// }

// // // // // Trying to access quantityInStock here will result in an error
//  console.log("Quantity Outside Scope:", quantityInStock); // Error: quantityInStock is not defined


// {
//   const productId = 1;
//   console.log("Product ID:", productId); // Output: 1

//   // Attempting to reassign the product ID will result in an error
//   // productId = 2; // Error: Assignment to constant variable.
// }

// // Trying to access productId here will result in an error
// console.log("Product ID Outside Scope:", productId); // Error: productId is not defined

// var discountPercentage = 100;
// {
//   var discountPercentage = 10;
//   console.log("Discount Percentage:", discountPercentage); // Output: 10

//   // Modifying the discount percentage
//   discountPercentage = 15;
//   console.log("Updated Discount Percentage:", discountPercentage); // Output: 15
// }

// // // Accessing discountPercentage outside the block still works
// console.log("Discount Percentage Outside Scope:", discountPercentage); // Output: 15



// function discountPercentageFunction() {
//   var discountPercentageFunction = 25;
//   console.log(discountPercentageFunction); // Output: 25
// }

// discountPercentageFunction();
// // // Accessing localVar outside the function will result in an error
// console.log(discountPercentageFuntion); // Error: localVar is not defined





//------------------------------------let--------------------------------------
// let y = 10;
// if (true) {
//     let y = 20;  // New variable y is created
//     console.log(y);  // Outputs 20
// }
// console.log(y);  // Outputs 10


//------------------------------------const
// const z = 10;
//       // z = 20;  // Error: Assignment to constant variable.
// let a = 70;
//     a = 50;
//     console.log(a);

//-------------------------------------var
// var x = 10;
// if (true) {
//     var x = 20;  // x is updated
//     console.log(x);  // Outputs 20
// }
// console.log(x);  // Outputs 20



// function varFunctionScope(){
//   var a = 5;
//   console.log(a);
// }
// varFunctionScope();
// console.log(a)