
const caesarModule = (function () {

  // There are those beautiful constants again. I really might yoink this idea.
  // Furthermore, this is a great place to introduce a concept you've now 
  // illustrated: Closures. 

  // Do you see how these constants are defined within the `caesarModule` scope,
  // but outside of the `caesar()` function scope? That means they are global 
  // from the perspective of the `caesar()` function, but they are private
  // and protected from anything outside the `caesarModule`. You have ENCLOSED
  // these constant values, and limited access to them. That's a closure.
  // https://www.youtube.com/watch?v=GD6qtc2_AQA

  const LOWERCASE_A = 97;
  const LOWERCASE_Z = 122;
  const ALPHABET_LENGTH = 26;

  function caesar(input, shift, encode = true) {

    if (!shift || shift === 0 || shift > 25 || shift < -25){ 
      //so many or's it could be a viking ship
      //
      // Your jokes are so cringe, you're gonna be an amazing programmer.
      return false;
    };
    
    const newMsg = input.toLowerCase();
    
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

    // Not even gonna lie -- when I saw a bunch of if/else blocks, I prepared
    // myself to hate that code. But the way you structured it is actually 
    // super elegant. And your encode vs decode logic is minimal. I dig it.

  }
    return decoded;
  }

  return {
    caesar
  };
})();


module.exports = caesarModule.caesar;
