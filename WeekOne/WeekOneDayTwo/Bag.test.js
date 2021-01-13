
const Bag = require ('./Bag')

describe('Bag', function(){

    test('has a weight' , function(){
        
        const bag = new Bag(25, 'blue')
        expect(bag.weight).toBe(25)

    })

    test('does not have weight', function(){
        expect( () => new Bag().toThrowError('Bag must have weight'))
    })

    test('does not have color', function(){
        expect( () => new Bag().toThrowError("Mind Blown"))
    })

    test('check bag', function(){
        const susBag = new Bag (10000, 'orange')
        expect( () => susBag.checkBag.toThrowError("Suspiciois"))
        
    })

})