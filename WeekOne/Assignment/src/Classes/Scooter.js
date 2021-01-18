
const charge = require('./chargingStation')

/**Creates a class scooter
 * 
 */
class Scooter{
    /**
     * Creates constructor
     * @param {string}type - Scooter type
     * @param {string}color - Scooter color
     * @param {string}scooterID - Scooter name
     * @param {int}speed - Scooter Maximum speed
     * @param {int}battery - Battery Charge
     */

     constructor(scooterID, color, speed, battery){

         this.scooterID = scooterID;
         charge.allScooter.push(Scooter)
         this.color = color;
         this.speed = speed;
         this.battery = battery
         this.damage = false;
        
         
    }


    
    /**
     * Method to repair scooter
     */
    repair(){
      if(this.damage){
        this.damage = false;
        console.log("Repair Complete")
      }
    }

}
module.exports = Scooter

  