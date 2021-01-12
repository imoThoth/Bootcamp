/* Can you create an object that represents 3 generations of a family tree? 
You could use the Royal Family or a celebrity family to model the concepts!
 A person in the family tree should have the following properties:

name String
parents Array
childOf Function
The name property should be a string, the parents property should be an array,
 and that array should contain references to that person's parents. 
The childOf property should return a string of the parent's names.

Use a combination of objects arranged in arrays to represent different generations. 
Use the this keyword to create a childOf function that references the parents array of itself.

Once constructed you should be able to traverse from an individual to their grand-parents. 
You should be able to call childOf on any person and that function should return a string i.e. "Bob & Samantha" or "unknown".

Commit your code into Github and share the link with your coach.*/




/* Creates function, which list parent name
as an array, when called */
function parentFunction() {
    return this.parents.map(parent => parent.name).join(' & ') || "parents unknown"
  }
  
  /* Creates a new constant harry
    Assigns variables */
    const Harry = {
      name: 'Harry',
      lastName: 'Windsor',
      eyeColour : "yellow",
      isBald: false,
      height:180
      
    }
    
  /* Creates a new constant meghan
    Assigns variables */

    const Meghan ={
      name:'Meghan',
      lastName: 'Windsor',
      eyeColour : "pink",
      isBald: false,
      height:150
    }

    
  /* Creates a new constant William
    Assigns variables */

    const William = {};
    William.name= 'William'
    William.eyeColour=  "blue";
    William.isBald= "true";
    William.height= 190;

    
  /* Creates a new constant aaron
    Assigns variables */

const aaron = {
    name: 'aaron',
    eyeColour : "yellow",
    isBald: false,
    height:180
}

    
  /* Creates a new constant archie-Windsor
    Assigns variables */
  
  const archieWindsor = {
      name: 'Archie',
      lastName: 'Windsor',
      age: 0,
      parentFunction: [Harry, Meghan],
  };

  const person = {
    name: 'testPerson'
  }

 module.exports[Harry,Meghan,William,aaron,archieWindsor, person]
  


 