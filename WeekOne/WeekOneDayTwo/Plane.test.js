
const Plane = require ('./Plane')

describe('Plane', function(){

    test('does not have a destination', function() {
        /*const Plane = new Plane ();*/
        expect(() => new Plane()).toThrowError('Plane must have destination')
    })

})