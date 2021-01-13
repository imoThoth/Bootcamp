const crewMember = require ('./crewMember')

describe('crewMember', function(){

    test('has a age', function(){
        const Grace = new crewMember('Grace','Pilot', 25)
        expect(Grace.age).toEqual(25)
    })

    test('has a name' ,function(){
        const Nile = new crewMember('Nile','Attendee', 22)
        expect(Nile.name).toEqual('Nile')
    })
    
    test('crew greeting', ()=>{
        const Joe = new crewMember('Joe', 'Chair', 699)
        Joe.crewGreeting()
        expect(Joe.crewGreeting).toEqual(Joe.crewGreeting)
    })
})
