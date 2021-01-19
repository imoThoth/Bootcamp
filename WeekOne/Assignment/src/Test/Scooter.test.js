
const Scooter = require('../Classes/Scooter')
const ChargingStation = require('../Classes/ChargingStation')



describe('Scooter Constructor', function () {

    test('has a name', function(){
        const aeroHead = new Scooter("aeroHead", 'yellow', 60 , 100) 
        expect(aeroHead.scooterID).toBe("aeroHead")
        
    })

    test('does not have a name', function() {
        expect(() => new Scooter()).toThrowError('Please insert Scooter ID')
    })
     

    test('has a color', function(){
        const aeroHead = new Scooter("aeroHead", 'yellow' , 60 , 100 )
        expect(aeroHead.color).toBe('yellow')
    })

    test('speed', function(){
        const aeroHead = new Scooter("aeroHead", 'yellow', 60, 100)
        expect(aeroHead.speed).toBe(60)
    })

    test('battery', function(){
        const aeroHead = new Scooter("aeroHead", 'yellow', 60, 100)
        expect(aeroHead.battery).toBe(100) 
    })

    test('damage', function(){
        const aeroHead = new Scooter("aeroHead", 'yellow', 60, 100, false)
        expect(aeroHead.damage).toBe(false)
    })


describe('Method pushScooter', function () {

     test('Send scooter', function(){
        const aeroHead = new Scooter("aeroHead", 'yellow', 60, 100)
        aeroHead.pushScooter()
        expect(ChargingStation.allScooter).toContain(aeroHead)
     })

    
})

describe('Method repairScooter', function () {

    test('damage', function(){
        const aeroHead = new Scooter("Repair", 'yellow', 60, 100, true)
       // expect (aeroHead.damage).toBe(true)
        aeroHead.repairAllScooter()
        expect(aeroHead.damage).toBe(false)
    })
    })
})