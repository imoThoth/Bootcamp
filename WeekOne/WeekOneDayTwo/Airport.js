const Plane = require('./Plane')

/**
 * This represents an Airport class
 */

class Airport{

     availaiblePlanes = ['dynamo', 'olympia', 'celestia']

      /**Properties of airport class
     * @param {string} airportName - Represents the airports name
     * @param {number} terminals - Represents Airport terminals
     * @param {number} availaiblePlanes -Represents Availaible Planes
     */

     constructor(airportName,terminals) {

            if(!airportName){
                throw new Error("Cannot have empty field")
            }

            if(terminals < 0){
                throw new Error("Cannot have empty field")
            }

        this.airportName = airportName;
        this.terminals = terminals;

       
    }

    /**
     * Creaes method fly
     * Takes parameter destination as string
     * @param {string} destination - Represents plane destination
     */
    fly(destination){

        if(!destination){
            throw new Error("Cannot have empty field")
        }
        this.availaiblePlanes.pop()
    }

}
module.exports = Airport