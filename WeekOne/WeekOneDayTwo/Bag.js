/**
 * Represents Bag within airport or planes
 */
class Bag{
    /**
     * Represnets Properties of Bag
     * @param {number} weight;
     */
    constructor(weight){
        if(this.weight < 0 ){throw new Error("This field cannot be less than 0") };

        this.weight = weight;
    }
}

module.exports=Bag;
