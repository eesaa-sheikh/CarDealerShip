const Car = require('./Car.js');

const CarDealerShip = require('./CarDealerShip.js');
beforeEach(()=>{
 })

test("check the number of cars in stock", () => {

let eesaaDealer = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 200000, "3L V8"),new Car("Bugatti", 123123121, "10L W16"),new Car("Lamborghini", 1231131, "8L V10")])

const actual = eesaaDealer.carsInStock();
const expected = 3; //inStock.length;
expect(actual).toBe(expected);
});

test("check that cars can be added to dealership", () => {
    

    let carAdd = [new Car("lotus", 400000, "1L V2"),  new Car("Ford", 12011, "Zetec"),  new Car("Hyundai", 1122011, "Electric Job") ]

    let Zsolt = new CarDealerShip("Zsolt's Wheels", 20, [new Car("Toyota", 200000, "3L V8"),new Car("Bugatti", 123123121, "10L W16"),new Car("Lamborghini", 1231131, "8L V10")])

    Zsolt.addCarToCarDealership(carAdd[2])

    const actual = Zsolt.carsInStock()
    const expected = 4;
    expect(actual).toBe(expected);

});

test("return an array of cars by manufacturer", () => {


    let newCarDealer = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 100, "3L V8"),new Car("Bugatti", 100, "10L W16"),new Car("Lamborghini", 100, "8L V10")])
    
        const actual = newCarDealer.arrayOfManufacturers();
        const expected = ["Toyota","Bugatti","Lamborghini"]
    
        expect(actual).toStrictEqual(expected);
    
    });


    

test("check that manufacutring names can show all cars", () => {

let dealerWheels = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 100, "3L V8"),new Car("Bugatti", 100, "10L W16"),new Car("Bugatti", 1231231312, "100L W16"),new Car("Lamborghini", 100, "8L V10")])

     actual = dealerWheels.findAllcarByManufacturerSpecific("Bugatti").length; ;
    expected = 2;
    expect(actual).toStrictEqual(expected);

});

test("check Car Price of all in stock", () => {

    let newCarDealer = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 100, "3L V8"),new Car("Bugatti", 100, "10L W16"),new Car("Lamborghini", 100, "8L V10")])
    
    const actual = newCarDealer.totalCarValue();
    const expected = 300; 
    expect(actual).toBe(expected);

    });
    
    test("check Car Price for £0", () => {

        let newCarDealer = new CarDealerShip("Eesaa's dealer Wheels", 0, []);
        
        const actual = newCarDealer.totalCarValue();
        const expected = 0; 
        expect(actual).toBe(expected);
    
        });