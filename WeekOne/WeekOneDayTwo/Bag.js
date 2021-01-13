/**
 * Represents Bag within airport or planes
 */
class Bag{

    /**
     * Represents Properties of Bag
     * @param {number} weight - Represents weight of the bag
     * @param {string} color - Represents bag color
     */

    constructor(weight, color){

        if(this.weight < 0 ){
            throw new Error("This field cannot be less than 0") 
        }

        if(!color){
            throw new Error("Mind Blown")
        }

        this.weight = weight;
        this.color = color;
    }

    /**
     * Creates function check bag
     * Checks if bag is within weight limit
     */

    checkBag(){
        if(this.weight > 500 ){
            throw new Error("Suspicious")
        }
    }
}

module.exports=Bag;
