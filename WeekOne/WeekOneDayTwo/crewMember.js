const Person = require("./Person") 
/**
 * Creates a class which represents crew-member
 * This class inherits name from an existing class person
 * 
 */


class crewMember extends Person{
    /**
     * Create a constructor, with parameters, Job role, Age and Name
     * @param {string} name - Shows crew members name 
     * @param {string} jobRole - Shows crew members role
     * @param {number} age  - Shows crew members age
     */

     constructor(name, jobRole, age){
        
         super(name)
         this.jobRole = jobRole
         this.age = age
     }

     /**
      * Creates a method, which displays a greeting
      * The greeting shows the host name
      * and displays a heart-warming message
      */
     crewGreeting(){
         console.log("Hello I am, " + this.name +" your crew host for this journey")
     }

}
module.exports = crewMember