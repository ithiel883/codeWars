//REVERSE STRING
function reverseStr(str) {

    ///////////////
    
    /* return str.split('')
      .reverse()
      .join('') */
      /* 
      let revString = '';
      
      for (let i = str.length -1; i>= 0; i-- ){
      revString = revString + str[i]
      }
      return revString; */
      
      /////////////////
      
    /*   
      let revString = '';
      
      for (let i = 0; i <= str.length -1; i++ ){
      revString = str[i] + revString
      }
      return revString; */
      
     /*  let revString = '';
      
      for ( let char of str ){
      revString = char + revString
      }
      return revString; */
      
      /* let revStr = '';
      
      str.split('').forEach( char =>
      revStr = char + revStr
      )
        return revStr */
        
       /*  
        return str.split('').reduce((revString, char) =>
         char + revString, '') */
    }
    
    
    //Validate Palindrome
    
    function isPalindrome(str) {
     var reversed =  str.split('').reverse().join('')
     
     return reversed === str;
     
    }
    
    
    
    //Reverse Integer
    
    function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');
    
    return parseInt(revString)* Math.sign(int)
    }
    
    
    //capitalize first letters of string
    
    function capitalizeLetters(str) {
    /*  const strArr = str.toLowerCase().split(' ')
     
     for(let i= 0; i < strArr.length; i++) {
     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
     
     }
     
     return strArr.join(' ') */
     
     /* return str
     .toLowerCase()
     .split(' ')
     .map(
       word => word[0].toUpperCase() + word.substring(1)
     )
     .join(' ') */
     
     return str.replace(/\b[a-z]/gi, function(char){
     return char.toUpperCase()
     });
     
     
    }
    
    
    //return character that is most common in the string
    
    function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = ''
    
    str.split('').forEach(function(char){
    if(charMap[char]){
    charMap[char]++;
    
    }else {
        charMap[char] = 1
    }
    })
    
    for (let char in charMap) {
        if(charMap[char] > maxNum) {
          maxNum = charMap[char];
        maxChar = char;
      }
    }
    
//convert value to arry

var toArr = cc.toString().split('')

//get from end of value to the last four characters

let main =  toArr.slice(-4)

//get from beginning to the last four characters
let hashed = toArr.slice(0, -4)
//store result in an empty string
let result = ''
//append # sign to result for every character before the last four digits

var replace = hashed.forEach(function(char){
 
 char = "#";
 result += char

})
// remove commas from last four digits
let actual = main.join("")

//return result
return result + actual
    return maxChar
    
    }
    
    //fizzbuzz
    
    function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }
    else if( i % 3 === 0) {
    console.log('Fizz')
    } else if (i % 5 === 0) {
    console.log('Buzz')
    }
    else  {
    console.log(i)
    }
    
    }
    }
    
    
    
    let output = fizzBuzz()
    
    console.log(output)
    
    