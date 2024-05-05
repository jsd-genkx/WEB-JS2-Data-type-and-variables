
// Example using 'let'
let quantity_in_stock = 10;
if (quantity_in_stock <= 10) {
    let quantity_in_stock = 200;  // New inventoryCount is created within this block
    console.log(quantity_in_stock);  // Outputs 200
}
console.log(quantity_in_stock);  // Outputs 10



//------------------------------------const
const unit_price = 30;
// unit_price = 50;  // Error: Assignment to constant variable.
console.log(unit_price);  // Outputs 30


var product_name = 'sugar';
if (product_name = 'sugar') {
    var product_name = 'milk';  // currentProduct is updated in the same scope
    console.log(product_name);  // Outputs 'sugar'
}
console.log(product_name);  // Outputs 'sugar'