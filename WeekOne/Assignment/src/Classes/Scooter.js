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
     }

     /**
      * Method push scooter(Void)
      * Pushes a new Scooter to charging station
      */

     pushScooter(){
       ChargingStation.allScooter.push(this)
     }

     /**
      * Creates method 
      * Iterates through scooter array
      * changes damage to false
      */
    repairAllScooter(){

       for(var i = 0; i < ChargingStation.allScooter.length; i++){

            if(this.damage = true){
              this.damage = false
            }
          }
          
     }
   } 

module.exports = Scooter

  