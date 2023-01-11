const Car = require('./Car.js');

// newCars = [
//     {CarName: "Corrolla", CarManufacturing: "Toyota",costOfCar: 12000},
//     {CarName: "Supra", CarManufacturing: "Toyota",costOfCar: 5000},
//     {CarName: "Yaris", CarManufacturing: "Toyota",costOfCar: 160000},
//     {CarName: "GT86", CarManufacturing: "Toyota",costOfCar: 100},
//     {CarName: "Auris", CarManufacturing: "Toyota",costOfCar: 120000},
//     {CarName: "Corrolla", CarManufacturing: "Toyota",costOfCar: 12000},

//     {CarName: "GTR", CarManufacturing: "Nissan",costOfCar: 110000},
//     {CarName: "Ultima", CarManufacturing: "Nissan",costOfCar: 5000},
//     {CarName: "Almera", CarManufacturing: "Nissan",costOfCar: 160000},
//     {CarName: "GT86", CarManufacturing: "Nissan",costOfCar: 100},

//     {CarName: "Gallardo", CarManufacturing: "Lamborghini",costOfCar: 240000},
//     {CarName: "Hurrican", CarManufacturing: "Lamborghini",costOfCar: 300000},
//     {CarName: "Murchelago", CarManufacturing: "Lamborghini",costOfCar: 300000},
//     {CarName: "Countasch", CarManufacturing: "Lamborghini",costOfCar: 1200000},

// ]
const CarDealership = function (name, maxCarInDealerShip, inStock) {  //constructor function 

    //Properties
   
    this.name = name;
    this.maxCarInDealerShip = maxCarInDealerShip;
    this.inStock = inStock;
      
}

//Count the number of cars there are in Stock
CarDealership.prototype.carsInStock = function(){
    return this.inStock.length;
}


//Return an array containing each car's manufacturer

CarDealership.prototype.nameOfCarManufacturer  = function () {

    let ManufacturerArray= []; 
    let newStock = this.carsInStock;
  
   for(item in newStock){
    ManufacturerArray.push(newStock[item].inputName);
   } 
return ManufacturerArray;

};


//Add a car to stock

CarDealership.prototype.addCarToCarDealership = function (car){
return this.inStock.push(car);
    }

CarDealership.prototype.arrayOfManufacturers = function(){
    return this.inStock.map((car) => {return car.inputName});
}

//Find from specific manufacturer
CarDealership.prototype.findFromSpecificManufacturer = function(inputName){
    return this.newStock.filter(Car=>  Car.inputName == inputName);

    
    //  .this.inStock.filter((Car)=> {return Car.inputName === inputName})
    // .filter((car) => {return car.inputName=== inputName});
}

CarDealership.prototype.findAllcarByManufacturerSpecific = function (inputname)  {
    return this.inStock.filter(inStock => inStock.inputName == inputname );
  };

// //find all cars from brand name
// CarDealership.prototype.carsFromBrand = function(name){
//         return this.inStock.filter(carsInStock =>
//             carsInStock.name)
//     };


// filter search for cars total car value.

CarDealership.prototype.totalCarValue = function(){

const initCarValue = 0;
        const priceOfCar = this.inStock.map(inStock => inStock.inputCost);

return priceOfCar.reduce((accumlator,currentValue)=> accumlator + currentValue, initCarValue);
}



module.exports = CarDealership;