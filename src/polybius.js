
const polybiusModule = (function () {
  
  // You took the difficult route to a solution. The dreaded 2D array.
  // I did the same thing, but slightly different implementation. 
  // Glad I'm not the only one who took the hard way .
  const alphabet = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "(i/j)", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];

  function polybius(input, encode = true) {
    if (!encode) {

      // testInput doesn't seem like a GREAT variable name. Could stand to be
      // more descriptive.
      const testInput = input.split(" ");
      let sentence = [];
      
      for (word of testInput) {
        
        if (word.length % 2 != 0) {
          return false;
        } else {
          let newWord = "";
          // DUDE! +=2 !! Idk why that didn't occur to me!
          for (let i = 0; i < word.length; i += 2) {
            let column = word[i];
            let row = word[i + 1];
            // elegant AF
            newWord += `${alphabet[row - 1][column - 1]}`;
          }
          sentence.push(newWord);
        }
      }
      // Only thing that seems weird here is that `join()` already returns
      // a string. What exactly are you coercing into string format?
      return sentence.join(" ").toString();

    } else {

      const lowered = input.toLowerCase();
      let encoded = "";
      
      // Okay, so this is about to take a turn. You seem to have a firm grasp
      // on process efficiencies, so I think you'll understand what I'm about
      // to say. It's not shady, so calm down.

      // First off, three nested for loops is too much. With rare exceptions, if
      // you're using more than two for loops, you're using a jackhammer to carve
      // an ice sculpture. There's almost always a better way. Think about this:
      // The first loop goes through the whole message. If it's 25 chars long,
      // thats 25 loops. The second goes through 5 iterations, and the third goes 
      // 5 more. That's 25^2... You loop 25 times for every character in the input.

      // If you used an organized `Array.find()`, possibly even a nested `find()`
      // then you'd save a buttload of process efficiency. /end rant



      // Definitely better to call the first variable `letter-index`, since it
      // does not, in fact, hold a letter value
      for (let letter = 0; letter < lowered.length; letter++) {
        
        for (let row = 0; row < alphabet.length; row++) {
          
          for (let column = 0; column < alphabet[row].length; column++) {
            
            if (lowered[letter] == alphabet[row][column]) {
              //reverse the keys because matrix logic != reading logic
              //
              // Another nice catch on your part
              encoded += `${column + 1}${row + 1}`;
            }
          }
          //detect if i or j is there a better way to do this?
        }
        // "better"? Idk. This is a pretty simple operation, but you could save
        // some keystrokes with something like 'ij'.includes(lowered[letter])
        if (lowered[letter] == "i" || lowered[letter] == "j") {
          encoded += `42`;
          //   //   //detect if a space and this as well
        } else if (lowered[letter] == " ") {
          encoded += " ";
        }
      }
      return encoded.toString();
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
