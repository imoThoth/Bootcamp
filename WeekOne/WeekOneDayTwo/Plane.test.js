
const Plane = require ('./Plane')
const Passenger = require ('./Passenger')
const crewMember = require('./crewMember')


describe('Plane', function(){

    test('does not have a destination', function() {
        //const Plane = new Plane ();
        expect(() => new Plane()).toThrowError('Plane must have destination')
    })

    test('crewMember', function(){
        const andy = new crewMember('Andy','Pilot','20')
        const plakPlane = new Plane('Mauritius')
        plakPlane.boardPassenger(andy)
        expect(plakPlane.crew).toContainEqual(andy)
    })

    test('passenger', function(){
        const reginald = new Passenger('Reginald', 'TIC209180')
        const tinkerbell = new Plane ('Neverland')
        tinkerbell.boardPassenger(reginald)
        expect(tinkerbell.passengers).toContainEqual(reginald)
    })

})