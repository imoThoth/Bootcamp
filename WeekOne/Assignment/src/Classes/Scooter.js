const ChargingStation = require('./ChargingStation')

/**Creates a class scooter
 * 
 */

class Scooter{

    /**
     * Creates constructor
     * @param {string}color - Scooter color
     * @param {string}scooterID - Scooter name
     * @param {int}speed - Scooter Maximum speed
     * @param {int}battery - Battery Charge
     */

     constructor(scooterID, color, speed, battery, damage = false)
     {

        if(!scooterID){
          throw new Error("Please insert Scooter ID")
        }

         this.scooterID = scooterID
         this.color = color
         this.speed = speed
         this.battery = battery
         this.damage = damage

        ChargingStation.allScooter.push(scooterID, damage)
     }

     /**
      * Creates method 
      * Iterates through scooter array
      * changes damage to false
      */
    repairAllScooter(){

       var check = ChargingStation.allScooter

       for(var i = 0; i < ChargingStation.length; i++){
         
        change = ChargingStation.pop
        console.log(change)
        if(change == true){
          return false
        }
          console.log(change)
     }
   }
}
module.exports = Scooter

  