// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "(i/j)", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];

  function polybius(input, encode = true) {
    if (!encode) {
      // create an array of 'words' ["112211", "212121"]
      const testInput = input.split(" ");
      let sentence = [];
      // itereate through each word
      for (word of testInput) {
        // if the number of numbers isn't even reject
        if (word.length % 2 != 0) {
          return false;
        } else {
          let newWord = "";
          //itereate through each pair of number that's why we +=2
          for (let i = 0; i < word.length; i += 2) {
            let column = word[i];
            let row = word[i + 1];
            // reverse keys because matrix logic  != reading logic
            newWord += `${alphabet[row - 1][column - 1]}`;
          }
          sentence.push(newWord);
        }
      }

      return sentence.join(" ").toString();
    } else {
      const lowered = input.toLowerCase();
      let encoded = "";
      
      // itereate through each letter
      for (let letterIndex = 0; letterIndex < lowered.length; letterIndex++) {
        // itereate through each row
        for (let row = 0; row < alphabet.length; row++) {
          // itereate through each column
          for (let column = 0; column < alphabet[row].length; column++) {
            // find letter location
            if (lowered[letterIndex] == alphabet[row][column]) {
              //reverse the keys because matrix logic != reading logic
              encoded += `${column + 1}${row + 1}`;
            }
          }
          //detect if i or j 
        }
        if (lowered[letterIndex] == "i" || lowered[letterIndex] == "j") {
          encoded += `42`;
         //detect if a space and this as well
        } else if (lowered[letterIndex] == " ") {
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
