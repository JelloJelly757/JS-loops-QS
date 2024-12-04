let diceRoll;
let rolls = 0; 

while(diceRoll !== 6){
    diceRoll = Math.floor(Math.random() * 6) + 1; 
    rolls++; 
    console.log(`You rolled: ${diceRoll}`); 
} 
console.log(`It took ${rolls} rolls to get a 6!`); 