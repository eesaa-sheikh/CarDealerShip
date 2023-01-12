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


test("check the max number of cars in dealership", () => {

let eesaaDealer = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 200000, "3L V8"),new Car("Bugatti", 123123121, "10L W16"),new Car("Lamborghini", 1231131, "8L V10")])

const actual = eesaaDealer.maxCap();
const expected = 5; //inStock.length;
expect(actual).toBe(expected);
});



test("check that cars can be added to dealership", () => {
    

    let carAdd = [new Car("lotus", 400000, "1L V2"),  new Car("Ford", 12011, "Zetec"),  new Car("Hyundai", 1122011, "Electric Job") ]

    let Zsolt = new CarDealerShip("Zsolt's Wheels", 20, [new Car("Toyota", 200000, "3L V8"),new Car("Bugatti", 123123121, "10L W16"),new Car("Lamborghini", 1231131, "8L V10")])

    Zsolt.addCarToCarDealership(carAdd[2])
    Zsolt.addCarToCarDealership(carAdd[0])

    const actual = Zsolt.carsInStock();
    const expected = 5;
    expect(actual).toBe(expected);

});

test("check that cars can be removed to dealership", () => {

let Zsolt = new CarDealerShip("Zsolt's Wheels", 20, [new Car("VW", 200000, "3L V8"),
new Car("PORCHE", 200000, "3L V8"),
new Car("JAAAG", 200000, "3L V8"),
new Car("Pascal", 200000, "3L V8"),
new Car("Bugatti", 123123121, "10L W16")])

delete Zsolt.inStock[1]
 let removecar = Zsolt.inStock.splice(Car,0); //removes tow cars

const actual = Zsolt.deleteCarToCarDealership(removecar)
const expected = 4//the cars that was left after the deleted section
expect(actual).toBe(expected);

});

test("return an array of cars by manufacturer", () => {


    let newCarDealer = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 100, "3L V8"),new Car("Bugatti", 100, "10L W16"),new Car("Lamborghini", 100, "8L V10")])
    
        const actual = newCarDealer.arrayOfManufacturers();
        const expected = ["Toyota","Bugatti","Lamborghini"]
    
        expect(actual).toStrictEqual(expected);
    
    });

    test("return an array of cars by engine", () => {
    let messiGarage = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 100, "3L V8"),new Car("Bugatti", 100, "10L W16"),new Car("Lamborghini", 100, "8L V10")])
    
    const actual = messiGarage.arrayOfCarsWithEngine();
    const expected = ["3L V8","10L W16","8L V10"]

    expect(actual).toStrictEqual(expected);

});


test("return an  asc array of cars by engine Size", () => {
    let messiGarage = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 100, "201"),new Car("Bugatti", 100, "0.1"),new Car("Lamborghini", 100, "1")])
    
    const actual = messiGarage.arrayOfCarsWithEngine().sort();
    const expected = ["0.1","1","201"]

    expect(actual).toStrictEqual(expected);

});


test("return an  acensnding  of cars by price", () => {
    let messiGarage = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 10, "3L V8"),new Car("Bugatti", 1000, "10L W16"),new Car("Lamborghini", 100, "8L V10")])
    
    const actual = messiGarage.arrayOfCarsWithCost();
    const expected = [10,1000,100]

    expect(actual).toStrictEqual(expected);

});


test("return an acs array of cars by price", () => {
    let messiGarage = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 10, "3L V8"),new Car("Bugatti", 1000, "10L W16"),new Car("Lamborghini", 100, "8L V10")])
    
    const actual = messiGarage.arrayOfCarsWithCost().sort();
    const expected = [10,100,1000]

    expect(actual).toStrictEqual(expected);

});




    test("return an empty array of cars by manufacturer", () => {


        let newCarDealer = new CarDealerShip("Eesaa's dealer Wheels", 5, [])
        
            const actual = newCarDealer.arrayOfManufacturers();
            const expected = [];
        
            expect(actual).toStrictEqual(expected);
        
        })
        
//Test returns an array with the specified car but it seems to not work even though i tried to add in a car object in the expected
test("check that manufacturing names can show all cars", () => {

let dealerWheels = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 100, "3L V8"),new Car("Bugatti", 100, "10L W16"),new Car("Bugatti", 1231231312, "100L W16"),new Car("Lamborghini", 100, "8L V10")])

    actual = dealerWheels.findAllcarByManufacturerSpecific("Bugatti") ;
    expected = dealerWheels.carsInStock[{"inputCost": 100, "inputEngine": "10L W16", "inputName": "Bugatti"}, {"inputCost": 1231231312, "inputEngine": "100L W16", "inputName": "Bugatti"}];
    expect(actual).toStrictEqual(expected);

});

test("check that  counted  specified search of car", () => {

    let dealerWheels = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 100, "3L V8"),new Car("Bugatti", 100, "10L W16"),new Car("Bugatti", 1231231312, "100L W16"),new Car("Lamborghini", 100, "8L V10")])
    
         actual = dealerWheels.findAllcarByManufacturerSpecific("Bugatti").length ;
        expected = 2;
        expect(actual).toStrictEqual(expected);
    
    });

    test("check that non specifed  names returns empty", () => {

        let dealerWheels = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 100, "3L V8"),new Car("Bugatti", 100, "10L W16"),new Car("Bugatti", 1231231312, "100L W16"),new Car("Lamborghini", 100, "8L V10")])
        
             actual = dealerWheels.findAllcarByManufacturerSpecific("porsche") ;
            expected = [];
            expect(actual).toStrictEqual(expected);
        
        });
        
    
test("check that engine size can show certain cars cars", () => {

    let dealerWheels = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 100, "3L V8"),new Car("Bugatti", 100, "3L V8"),new Car("Bugatti", 1231231312, "100L W16"),new Car("Lamborghini", 100, "3L V8")])
    
        actual = dealerWheels.findAllcarByEngineSpecific("3L V8").length ;
        expected = 3;
        expect(actual).toStrictEqual(expected);
    
    });

    test("check that invalid engine size  is not shown", () => {

        let dealerWheels = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 100, "3L V8"),new Car("Bugatti", 100, "3L V8"),new Car("Bugatti", 1231231312, "100L W16"),new Car("Lamborghini", 100, "3L V8")])
    
            actual = dealerWheels.findAllcarByEngineSpecific("SPITFIRE engine") ;
            expected = [];
            expect(actual).toStrictEqual(expected);
        
        });

    test("check that cost of specific car can show", () => {

        let dealerWheels = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 100, "3L V8"),new Car("Bugatti", 100, "3L V8"),new Car("Bugatti", 1231231312, "100L W16"),new Car("Lamborghini", 12313131200, "3L V8")])
        
            actual = dealerWheels.findAllcarByCostSpecific(1231231312).length ;
            expected =1;
            expect(actual).toStrictEqual(expected);
        
        });

test("check that manufacutring names shown no cars in stack", () => {

    let dealerWheels = new CarDealerShip("Eesaa's dealer Wheels", 5, [new Car("Toyota", 100, "3L V8"),new Car("Bugatti", 100, "10L W16"),new Car("Bugatti", 1231231312, "100L W16"),new Car("Lamborghini", 100, "8L V10")])
    
         actual = dealerWheels.findAllcarByManufacturerSpecific("Mustange").length; ;
        expected = 0;
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