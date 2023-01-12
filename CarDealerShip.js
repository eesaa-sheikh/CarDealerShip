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

// CarDealership.prototype.carsInPrice = function(){
//     return this.inStock;
// }

//Count the Max capacity of the dealership
CarDealership.prototype.maxCap = function(){
    return this.maxCarInDealerShip;
}


//Add a car to stock
CarDealership.prototype.addCarToCarDealership = function (car){
return this.inStock.push(car);
    }

//     //Delete a car from stock
CarDealership.prototype.deleteCarToCarDealership = function (car){
    return this.inStock.length-this.inStock.splice(car,1).length ;
     
        }

    // //Delete a car to stock
    // CarDealership.prototype.deleteCarFromCarDealership = function (car){
    //  //   for (i =0; i< this.inStock.length; i++){
    // delete this.inStock[i].length- this.inStock.length
    //     return this.inStock.length;
    //    // }
         
    //         }

//return an array of manufacturers
CarDealership.prototype.arrayOfManufacturers = function(){
    return this.inStock.map((car) => {return car.inputName});
}


/////////////////////////////////////////////////////////////////////////////////

//return an array of engine
CarDealership.prototype.arrayOfCarsWithEngine = function(){
    return this.inStock.map((car) => {return car.inputEngine});
}

/////////////////////////////////////////////////////////////////////////////////


//return an array of price
CarDealership.prototype.arrayOfCarsWithCost = function(){
    return this.inStock.map((car) => {return car.inputCost});
}

/////////////////////////////////////////////////////////////////////////////////


//find cars by specific manufacturer
CarDealership.prototype.findAllcarByManufacturerSpecific = function (inputname)  {
    return this.inStock.filter(inStock => inStock.inputName == inputname );
  };

  //////////////////////////////////////////////////////////////////////////////

  //find cars by specific engine size
CarDealership.prototype.findAllcarByEngineSpecific = function (inputEngine)  {
    return this.inStock.filter(inStock => inStock.inputEngine== inputEngine  );
    // else console.log("This engine does not exist");
  };

  /////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////


//find cars by specific manufacturer
CarDealership.prototype.findAllcarByCostSpecific = function (inputCost)  {
    return this.inStock.filter(inStock => inStock.inputCost == inputCost );
  };


//finds the total car Value
CarDealership.prototype.totalCarValue = function(){
const initCarValue = 0;
        const priceOfCar = this.inStock.map(inStock => inStock.inputCost);

return priceOfCar.reduce((accumlator,currentValue)=> accumlator + currentValue, initCarValue);
}





module.exports = CarDealership;