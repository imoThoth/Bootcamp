
const Person = require("./Person");

/** 
 * Creates a Passenger class
 * Which inherits name from person 
*/


class Passenger extends Person {
    
    /**
     * Creates Constructor
     * @param {string} ticketNumber - name of the ticket
     * @param {string} name - inherits name from class person
     */
    constructor(name, ticketNumber) {
        super(name)
        this.ticketNumber = ticketNumber;
       
    }

}

module.exports = Passenger;