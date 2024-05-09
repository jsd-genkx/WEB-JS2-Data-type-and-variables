//---------------------------------------------------------Inventory----------------------------------------//
// variable is declared but has no value assigned to it
let discount = null;  // No discount applicable
console.log(discount);

function displayDiscount(discount) {
    console.log(`The discount is ${discount === null ? 'not applicable' : `${discount}%`}.`);
}

displayDiscount(discount);


//a property of an object doesn't exist or is not applicable
let product = {
  product_id: 101,
  product_name: "Soya Milk",
  unit_price: null  // Price is not set
};
console.log(product.unit_price);
console.log(`The price for ${product.product_name} is ${product.unit_price === null ? 'not set yet' : `$${product.unit_price}`}.`);
console.log(`The products quantity in stock: ${product.quantity_in_stock}`) //undifined 



//array
let fruit_products = ['apple','banana','mango'];
//we dicides to remove all friut from stock
fruit_products = null;
// Now you can check the state of friut_products
if (fruit_products === null) {
  console.log("Your fruit products in stock is empty.");
} else {
  console.log("You have fruit in your stock.");
}






//----------------------------------------------------------------------------------------------------------------//
// variable is declared but has no value assigned to it
let x = null;
console.log(x); // Output: null

//a property of an object doesn't exist or is not applicable
const person = {
    name: 'Lak',
    age: null,
    gender: null
  };
  
  console.log(person.age); // Output: null (age property exists but has no value yet)
  console.log(person.address); // Output: undefined (address property doesn't exist)



  let shoppingCart = ['item1', 'item2', 'item3'];

  // User decides to remove all items from the cart
  shoppingCart = null; // Resetting to an intentionally empty state
  
  // Now you can check the state of the shopping cart
  if (shoppingCart === null) {
    console.log("Your shopping cart is empty.");
  } else {
    console.log("You have items in your shopping cart.");
  }
  





// null fore reset 
let value = 42;

// Some operations that make the value invalid
if (Math.random() < 0.5) {
  value = null; // Assign null to make it invalid
} else {
  value = 42; // Keep the original value (valid)
}

console.log(value); // Output: null or 42 (randomly either of these)

  