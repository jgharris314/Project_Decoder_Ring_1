// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // helper function to detect duplicate characters
  function detectDuplicate(arr){
    return (new Set(arr)).size === arr.length; 
  }

  function substitution(input, alphabet, encode = true) {
    const CONVERT_ARRAY_TO_UNI = 97;
    const loweredInput = input.toLowerCase();
    // Get rid of those nasty alphabets
    if (!alphabet || alphabet.length != 26 || typeof(alphabet) != 'string') return false;
    // Ensure there are no duplicates
    if(!detectDuplicate(alphabet.toLowerCase().split(""))) return false;
    
    let message = '';

    for(let char = 0; char < loweredInput.length; char++) {
      if(loweredInput[char] == ' '){
        message += loweredInput[char];
      }else {
        if(encode){
          message += alphabet[loweredInput.charCodeAt(char) - CONVERT_ARRAY_TO_UNI]
        }else {
          message += String.fromCharCode(alphabet.indexOf(loweredInput[char]) + CONVERT_ARRAY_TO_UNI)
        }
      }
    }
    return message;
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
