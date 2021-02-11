
const substitutionModule = (function () {

  // helper function to detect duplicate characters
  function detectDuplicate(arr){
    return (new Set(arr)).size === arr.length; 
  }

  function substitution(input, alphabet, encode = true) {
    // I haven't seen a lot of people use constants to describe the meaning
    // behind certain values, but that's a good strategy to enhance readability.
    const LOWERCASE_A = 97;
    const LOWERCASE_Z = 122;

    const loweredInput = input.toLowerCase();

    // Nice work short circuiting early
    if (!alphabet || alphabet.length != 26 || typeof(alphabet) != 'string') return false;
    if(!detectDuplicate(alphabet.toLowerCase().split(""))) return false;
    

    if(encode){
      let encoded = ''
      for(let letter = 0; letter < loweredInput.length; letter++){
        // This is poetry in code, bro. 
        if(loweredInput.charCodeAt(letter) < LOWERCASE_A || loweredInput.charCodeAt(letter) > LOWERCASE_Z){
          encoded += loweredInput[letter];
        }else {
          // Elegant!
          encoded += alphabet[loweredInput.charCodeAt(letter)-97];
        }
      }
      return encoded
    }else{

      // This else block is the only thing I see as needing refactoring right away.
      // Although the logic is sound, you're REALLY HEAVILY repeating yourself.
      // Keep in mind that the IF block and the ELSE block are essentially running
      // the same operation. The only difference is the alphabet used for translation.
      
      // So the only line that needs an if/else is the one that sets which alphabet
      // to use for the operation. Every other step is identical.

      let decoded = ''

      for(let letter of loweredInput){
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
