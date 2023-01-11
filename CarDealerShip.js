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

//Add a car to stock
CarDealership.prototype.addCarToCarDealership = function (car){
return this.inStock.push(car);
    }

//return an array of manufacturers
CarDealership.prototype.arrayOfManufacturers = function(){
    return this.inStock.map((car) => {return car.inputName});
}


//find cars by specific manufacturer
CarDealership.prototype.findAllcarByManufacturerSpecific = function (inputname)  {
    return this.inStock.filter(inStock => inStock.inputName == inputname );
  };

//finds the total car Value
CarDealership.prototype.totalCarValue = function(){
const initCarValue = 0;
        const priceOfCar = this.inStock.map(inStock => inStock.inputCost);

return priceOfCar.reduce((accumlator,currentValue)=> accumlator + currentValue, initCarValue);
}



module.exports = CarDealership;