

const chargingStation = require('../Classes/chargingStation')
const Scooter = require('../Classes/Scooter')



describe('Scooter Constructor', function () {

    test('has a name', function(){
        const aeroHead = new Scooter("aeroHead", 'yellow', 60 , 100) 
        expect(aeroHead.scooterID).toBe("aeroHead")
        
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


     test('Send scooter', function(){
        const aeroHead = new Scooter("aeroHead", 'yellow', 60, 100)
        expect(chargingStation.allScooter).toContain("aeroHead")
       

     })


})