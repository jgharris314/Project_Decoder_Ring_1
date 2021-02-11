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
    const LOWERCASE_A = 97;
    const LOWERCASE_Z = 122;

    const loweredInput = input.toLowerCase();
    // Get rid of those nasty alphabets
    if (!alphabet || alphabet.length != 26 || typeof(alphabet) != 'string') return false;
    // Ensure there are no duplicates
    if(!detectDuplicate(alphabet.toLowerCase().split(""))) return false;
    
    // check for encode 
    if(encode){
      let encoded = ''
      for(let letter = 0; letter < loweredInput.length; letter++){
        // if the letter isn't on the alphabet, assumed symbol or space
        if(loweredInput.charCodeAt(letter) < LOWERCASE_A || loweredInput.charCodeAt(letter) > LOWERCASE_Z){
          encoded += loweredInput[letter];
        }else {
          // unicode starts at 97 but our matrix starts at 0
        encoded += alphabet[loweredInput.charCodeAt(letter)-97];
        }
      }
      return encoded
    }else{
      // decoding
      let decoded = ''

      for(let letter of loweredInput){
        //if the given alphabet doesn't include the character it must be special character or space
          !alphabet.includes(letter) ? decoded += letter : decoded += String.fromCharCode(alphabet.indexOf(letter) + 97);
      }
      return decoded;
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
