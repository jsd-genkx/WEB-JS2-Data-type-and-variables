//-------------------------------------------------Inventory--------------------------------//
//variable is declared but not assigned a value
let productName;
console.log(productName);

//accessing an object property that doesn't exist
const products = {
  productName: 'Oak Milk',
  unitPrice: 30
};
console.log(products.quantity); // Output: undefined (the property "quantity" doesn't exist)


  //a function doesn't have a return statement
  function addProduct() {
    console.log('Please Product from addProduct');
  }
  
  const resultAddProduct = addProduct();
  console.log('Result Add Product',resultAddProduct); // Output: undefined



 //a function parameter is not provided with an argument
 function addProduct(productName) {
  console.log('add new product ' + productName);
}

addProduct(); // Output: 'add new prodcut, undefined' (productName parameter is not provided)


//an array element doesn't exist
const productList = ['apple', 'banana', 'mango'];

console.log(productList[5]); // Output: undefined (index 5 doesn't exist in the array)


  //you can check undefined
  let product_color='' ;
    if (typeof product_color === 'undefined') {
      console.log('product_color is undefined', product_color);
    }
    console.log('product_color is', product_color);


//-----------------------------------------------------------------------------------------------//

//variable is declared but not assigned a value
let x;
console.log(x); // Output: undefined

//accessing an object property that doesn't exist
const person = {
    name: 'Alice',
    age: 30
  };
  
  console.log(person.gender); // Output: undefined (the property "gender" doesn't exist)

  //a function doesn't have a return statement
  function greet() {
    console.log('Hello!');
  }
  
  const result = greet();
  console.log(result); // Output: undefined

  //a function parameter is not provided with an argument
  function greet(name) {
    console.log('Hello, ' + name);
  }
  
  greet(); // Output: 'Hello, undefined' (name parameter is not provided)
  

  //an array element doesn't exist
  const arr = [1, 2, 3];

  console.log(arr[5]); // Output: undefined (index 5 doesn't exist in the array)

  //you can check undefined
  let a;
if (typeof a === 'undefined') {
  console.log('a is undefined');
}


  
