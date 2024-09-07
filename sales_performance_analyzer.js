//Task1: Create a Function to Calculate Average Sales
let salesperson = { name: 'Alice', sales: [12000, 15000, 13000]};
console.log(salesperson,sales);
let salespersonSum = salesperson.reduce((sales,saleperson) => sales,salesperson);
console.log(`Sum of SalesPerson Alice: $${sales}`);
function calculateAverageSales (salespersonSum,quantity) {
    return salespersonSum / 3;
}
console.log(`Alices Average Sales: ${calculateAverageSales}`);

