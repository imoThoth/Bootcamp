
  const Person = require ('./Person')/**Error: Person does not define */
  const crewMember = require ('./crewMember')
  const passenger = require ('./Passenger')
  
  /**
 * This class represents a plane
 * Uses imports passenger and crewmember
 */

class Plane{

    /**
     * Defines the properties of plane
     * @param {String} airportName - This represents the destination
     * @param {String} passengers - This represents the passengers
     * @param {String} crewMembers - This represents the crewMembers
     * 
     */

     /**
      * 
      * Constructor function
      */

    constructor(name, ticketNumber, jobRole, Person){

      if(!airportName){
          throw new Error("Plane must have destination")
      }

      super(name, ticketNumber, jobRole)
      this.airportName = airportName
      this.crew = [crewMembers];
      this.passengers = [passengers]
      this.ticketNumber = ticketNumber

      console.log("Welcome to " + airportName)
    }
    
    /**
     * Function Board passenger
     * arranges person into plane 
     * assigns them to passenger or crewMember
     */
    boardPassenger(Person){
      if(Person instanceof passenger){
            this.passengers.push(Person)

      } else if (Person instanceof crewMember){
        this.crew.push(Person)
      }
    }

}
module.exports = Plane;