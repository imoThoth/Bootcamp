/** 
 * Creates a Passenger class
 * Which inherits from person 
*/

const Person = require("./Person");

class Passenger extends Person {
    
    /**
     * Creates ticket number
     * @param {string} ticketNumber - name of the ticket
     *  
     */
    constructor(name, ticketNumber) {
        super(name)
        this.ticketNumber = ticketNumber;
       
    }

}

module.exports = Passenger;