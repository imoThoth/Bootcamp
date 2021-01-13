
const Airport = require('./Airport')

describe('Airport', function(){

    test('has a name', function(){
        const heathrow = new Airport("Heathrow", 50, 100)
        expect(heathrow.airportName).toBe("Heathrow")
        expect(heathrow.terminals).toBe(50)
    })

    test('not airport name', function(){
        expect( () => new Airport().toThrowError("Cannot have empty field"))
    })

    test('has a terminal', function(){
        const gatwick = new Airport("Gatwick", 50)
        expect(gatwick.terminals).toBe(50)
    })

    test('not terminal' , function(){
        expect( () => new Airport().toThrowError("Cannot have empty field") )

    })

    test('less than 0 or 0', function(){
        const ba = new Airport("British Airways", 0)
        expect( () => ba.toThrowError("Cannot have empty field") )
    })

     test('fly', ()=>{
        const gemlink = new Airport("Gem Link", 0)
        gemlink.fly("Paris")
        expect(gemlink.availaiblePlanes).toContain('dynamo', 'olympia')
    })

    test('no destination', function(){
        const arabia = new Airport("Arabian Nights", 6)
        expect(() => arabia.fly.toThrowError("Cannot have empty field"))
    })

})