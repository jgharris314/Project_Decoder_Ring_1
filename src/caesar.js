// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const LOWERCASE_A = 97;
  const LOWERCASE_Z = 122;
  const ALPHABET_LENGTH = 26;

  function caesar(input, shift, encode = true) {
    // check if shift is proper value
    if (!shift || shift === 0 || shift > 25 || shift < -25){ 
      //so many or's it could be a viking ship
      return false;
    };
    // convert to lower case
    const newMsg = input.toLowerCase();
    // check for encode or decode
    if(!encode){
      shift *= -1;
    }

    let decoded = ""
    
    for(let letter = 0; letter < newMsg.length; letter++){
    // get unicode value of the current letter
    let tempLtr = newMsg.charCodeAt(letter)
      // check that the letter is a letter, otherwise assume space or punctuation
    if (tempLtr > LOWERCASE_Z || tempLtr < LOWERCASE_A){
      decoded += String.fromCharCode(tempLtr);
      //make sure the letter doesn't shift past z and wraps around
    }else if(tempLtr + shift > LOWERCASE_Z) {
      decoded += (String.fromCharCode((tempLtr + shift) - ALPHABET_LENGTH))
      //make sure the letter doesn't shift past a and wraps around
    }else if((tempLtr + shift < LOWERCASE_A)) {
      decoded += (String.fromCharCode((tempLtr + shift) + ALPHABET_LENGTH))
      // letter is a letter and doesnt shift off
    }else {
      decoded += String.fromCharCode(tempLtr + shift)
    }
  }
    return decoded;
  }

  return {
    caesar
  };
})();


module.exports = caesarModule.caesar;
