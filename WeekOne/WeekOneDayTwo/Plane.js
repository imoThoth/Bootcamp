
  const Person = require ('./Person')
  const crewMember = require ('./crewMember')
  const Passenger = require ('./Passenger')
  
  /**
 * This class represents a plane
 * Uses imports passenger and crewmember
 */

class Plane extends Person{

    /**
     * Defines the properties of plane
     * @param {String} airportName - This represents the destination
     * @param {String} passengers - This represents the passengers
     * @param {String} crewMembers - This represents the crewMembers
     * 
     */

    constructor(airportName, name, ticketNumber, jobRole,){

      if(!airportName){
          throw new Error("Plane must have destination")
      }

      super(name, ticketNumber, jobRole)
      this.airportName = airportName
      this.crew = [];
      this.passengers = []
      this.ticketNumber = ticketNumber

      console.log("Welcome to " + airportName)
    }
    
    /**
     * Function Board passenger
     * arranges person into plane 
     * assigns them to passenger or crewMember
     */
    boardPassenger(Person){
      if(Person instanceof Passenger){
            this.passengers.push(Person)

      } else if (Person instanceof crewMember){
        this.crew.push(Person)
      }
    }

}
module.exports = Plane;