class Plane{

    /**
     * 
     * @param {String} airportName;
     *  
     * 
     */

    constructor(airportName){

      if(!airportName){
          throw new Error("Plane must have destination")
      }

      this.airportName = airportName
      console.log("Welcome to " + airportName)
    }

}
module.exports = Plane;