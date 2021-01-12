
const Airport = require('./Airport')

describe('Airport', function(){

    test('has a name', function(){
        const heathrow = new Airport("Heathrow", 50, 100)
        expect(heathrow.airportName).toBe("Heathrow")
        expect(heathrow.terminals).toBe(50)
        expect(heathrow.planes).toBe(100)
    })

    test('not airport name', function(){
        expect( () => new Airport().toThrowError("Cannot have empty field"))
    })

    test('has a terminal', function(){
        const gatwick = new Airport("Gatwick", 50, 100)
        expect(gatwick.terminals).toBe(50)
    })

    test('not terminal' , function(){
        expect( () => new Airport().toThrowError("Cannot have empty field") )

    })

    test('less than 0 or 0', function(){
        const ba = new Airport("British Airways", 0, 100)
        expect( () => ba.toThrowError("Cannot have empty field") )
    })


  

})