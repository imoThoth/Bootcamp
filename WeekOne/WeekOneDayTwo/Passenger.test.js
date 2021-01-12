
const Passenger = require('./Passenger')


describe('Passenger', function(){

    test('has a name', function(){
        const Ellie = new Passenger("Ellie", "AU289786")
        expect(Ellie.name).toEqual("Ellie")
        expect(Ellie.ticketNumber).toEqual("AU289786")
    })

    test('has a ticket', function(){
        const Ellie = new Passenger("Ellie", "AU289786")
        expect(Ellie.ticketNumber).toEqual("AU289786")
    })

    test('instance of', () => {
        const betty = new Passenger('Betty')
        expect(betty instanceof Passenger).toBeTruthy()
    })
})