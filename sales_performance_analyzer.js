//Task1: Create a Function to Calculate Average Sales
const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] },
    ];
    function calculateAverageSales(name) {
        let sum = name.sales.reduce((accumulator, currentValue) => accumulator + currentValue,0);
    return sum / name.sales.length;
    }
    salesData.forEach(name => {
        name.sales =calculateAverageSales(name);
        });
    salesData.sort((a,b) => a.sales - b.sales);
    console.log(salesData); // Output average sales for each sales person in ascending order

    // Task2 : Create a Function to Determine Performance Rating
    function determineperformanceRating(name) {
        let rates =name.sales;
        
    if (rates > 10000) {
        console.log (`“Excellent” for average sales above $10,000`);
    } else if (rates >= 7000) {
        console.log (`“Good” for average sales between $7,000 and $10,000`);
    } else if (rates >=4000) {
        console.log (`“Satisfactory” for average sales between $4,000 and $7,000`);
    } else {
        console.log (`“Needs Improvement” for average sales below $4,000`);
    }
    return rates;
    
}
salesData.forEach(name => {
    determineperformanceRating(name);
    });
    salesData.sort((a,b) => a.sales - b.sales); // Output returns rates based on ascending averages


