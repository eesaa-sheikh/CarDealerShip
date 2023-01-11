const Car = require('./Car.js');

beforeEach(()=>{
   car = new Car("Lamborghini", "12340000", "10L W16");
})

describe("Testing MVP car dealership functions", () =>
{

test("Checking manufactuer  accessibility", ()=>{

     actual = "Lamborghini";
     expected =car.inputName;
    expect(actual).toBe(expected);

    })
});


describe("Testing MVP car dealership functions", () =>
{
test("Checking for car price accessibility", ()=>{

     actual = "12340000";
    expected =car.inputCost;
    expect(actual).toBe(expected);


})
});

describe("Testing MVP car dealership functions", () =>
{
test("Checking if car engine accessibility", ()=>{

     actual = "10L W16";
     expected =car.inputEngine;
    expect(actual).toBe(expected);


})
});
