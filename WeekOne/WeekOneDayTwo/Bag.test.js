
const Bag = require ('./Bag')

describe('Bag', function(){

    test('has a weight' , function(){
        
        const bag = new Bag(25)
        expect(bag.weight).toBe(25)

    })

    test('does not have weight', function(){
        expect( () => new Bag().toThrowError('Bag must have weight'))
    })
})