/**
 * This represents an Airport class
 */

class Airport{

    /**Properties of airport class
     * @param {String} name - Represents the persons name
     * @param {Number} terminals - Represents Airport terminals
     * @param {Number} availaiblePlanes -Represents Availaible Planes
     */

     /**
      * Represents Constructor
      * Error test added, to ensure there are no empty fields
      */

     constructor(airportName, terminals, planes) {

            if(!airportName){
                throw new Error("Cannot have empty field")
            }

            if(terminals < 0){
                throw new Error("Cannot have empty field")
            }

        this.airportName = airportName;
        this.terminals = terminals;
        this.planes = planes
     
    }
}
module.exports = Airport