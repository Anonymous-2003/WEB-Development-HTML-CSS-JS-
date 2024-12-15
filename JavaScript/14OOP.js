// object using string literals
var car = {
    brand: 'mercedes',
    model: 'CLR GTR',
    year:2023
}
console.log(car);

// object created using constructor function
function MyCar(brand,model,year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}
// create object
let car1 = new MyCar("Rolls Royce", "Phantom", 2022);
console.log(car1);