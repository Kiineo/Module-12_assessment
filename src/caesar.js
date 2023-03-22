// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'

  function caesar(input, shift, encode = true) {
    let result = ''
    if (shift === undefined){
      return false
    }
      if(shift == 0|| shift > 25|| shift < -25){
    return false
      }
    if (encode === true){ 
   for (let i = 0; i < input.length; i++){
     let newInput = input.toLowerCase()
    if (alpha.includes(newInput[i])){
      for (let n = 0; n < alpha.length; n++){
        if (alpha[n] === newInput[i]){
          let yeet = n + shift
          if (yeet > 25){
             yeet = yeet - 26
          }
          if (yeet < 0){
            yeet = yeet + 26
          }
          result += alpha[yeet]
          }
        }
      }
     else result += newInput[i]
    }
   }
   if (encode === false){
  for (let i = 0; i < input.length; i++){
     let newInput = input.toLowerCase()
    if (alpha.includes(newInput[i])){
      for (let n = 0; n < alpha.length; n++){
        if (alpha[n] === newInput[i]){
          let yeet = n - shift
          if (yeet > 25){
             yeet = yeet - 26
          }
          if (yeet < 0){
            yeet = yeet + 26
          }
          result += alpha[yeet]
          }
        }
      }
    
     else result += newInput[i]
    }
 }    
    return result
  }

// console.log(caesar("howdy", 5))
// console.log(caesar("howdy", -10))

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
