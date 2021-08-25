// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//first I'm going to reverse a string
function reverseStr(str) {
    return [...str].reduce((accumalator, character) => 
        character + accumalator, "")
    
}


function reverseInt(n) {
    let reverseNum = reverseStr(n.toString())
    let finalReverse = parseInt(reverseNum) * Math.sign(n)

    return finalReverse

}

module.exports = reverseInt;
