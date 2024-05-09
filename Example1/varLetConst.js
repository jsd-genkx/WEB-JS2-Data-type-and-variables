 //-------------------------------------------Inventory--------------------------------------
 let quantity_in_stock = 100;
 console.log("Initial Quantity:", quantity_in_stock); // Output: 100

// Simulating a purchase where the quantity decreases
 quantity_in_stock -= 50;
 console.log("Updated Quantity:", quantity_in_stock); // Output: 50


let product_name = 'Oat Milk';
console.log("Product Name:", product_name);

//Change product name
product_name = "Soya Milk";
console.log("New Product Name:", product_name);


const productId = 1;
console.log("Product ID:", productId); // Output: 1

// Attempting to reassign the product ID will result in an error
// productId = 2; // Error: Assignment to constant variable.


var discountPercentage = 10;
console.log("Discount Percentage:", discountPercentage); // Output: 10

// Modifying the discount percentage
discountPercentage = 15;
console.log("Updated Discount Percentage:", discountPercentage); // Output: 15




//-------------------------------------------Scope-------------------------------------

{
  let quantityInStock = 100;
  console.log("Initial Quantity:", quantityInStock); // Output: 100

  // Simulating a purchase where the quantity decreases
  quantityInStock = quantityInStock - 50;
  console.log("Updated Quantity:", quantityInStock); // Output: 50
}

// Trying to access quantityInStock here will result in an error
// console.log("Quantity Outside Scope:", quantityInStock); // Error: quantityInStock is not defined


{
  const productId = 1;
  console.log("Product ID:", productId); // Output: 1

  // Attempting to reassign the product ID will result in an error
  // productId = 2; // Error: Assignment to constant variable.
}

// Trying to access productId here will result in an error
// console.log("Product ID Outside Scope:", productId); // Error: productId is not defined


{
  var discountPercentage = 10;
  console.log("Discount Percentage:", discountPercentage); // Output: 10

  // Modifying the discount percentage
  discountPercentage = 15;
  console.log("Updated Discount Percentage:", discountPercentage); // Output: 15
}

// Accessing discountPercentage outside the block still works
console.log("Discount Percentage Outside Scope:", discountPercentage); // Output: 15



function discountPercentageFunction() {
  var discountPercentageFunction = 25;
  console.log(discountPercentageFunction); // Output: 25
}

discountPercentageFunction();
// Accessing localVar outside the function will result in an error
// console.log(discountPercentageFuntion); // Error: localVar is not defined





//------------------------------------let--------------------------------------
let y = 10;
if (true) {
    // let y = 20;  // New variable y is created
    console.log(y);  // Outputs 20
}
console.log(y);  // Outputs 10


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


//---------------------------------------------Scope------------------------------------------------//

//var keyword has function scope or global scope, depending on where it's declared
//local
function exampleFunction() {
    var localVar = 'I am a local variable';
    console.log(localVar);
  }
  
  exampleFunction(); // Output: 'I am a local variable'
  console.log(localVar); // Output: Uncaught ReferenceError: localVar is not defined

//global
var globalVar = 'I am a global variable';

function exampleFunction() {
  console.log(globalVar); // Output: 'I am a global variable'
}

exampleFunction();
console.log(globalVar); // Output: 'I am a global variable'

//let
// Block-scoped variable declaration using let
let x = 10;
let firstName = 'John';
let isStudent = true;

console.log(x); // Output: 10
console.log(firstName); // Output: 'John'
console.log(isStudent); // Output: true


function exampleFunction() {
    if (true) {
      let localVar = 'I am a local variable';
      console.log(localVar); // Output: 'I am a local variable'
    }
    // console.log(localVar); // This line would result in an error because localVar is not accessible here
  }
  
  exampleFunction();

  let counter = 1;

if (true) {
  let counter = 2;
  console.log(counter); // Output: 2 (this refers to the inner variable)
}

console.log(counter); // Output: 1 (this refers to the outer variable)


//Block-Scoped
if (true) {
    const localVar = 'I am a constant';
    console.log(localVar); // Output: 'I am a constant'
  }
  
  // console.log(localVar); // This line would result in an error because localVar is not accessible here


 