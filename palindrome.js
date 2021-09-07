const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  rl.question(`Enter a word \n`, (userInput) => {
    let tes=ispolindrome(userInput)
    console.log(tes)
    if(tes == true) {
      console.log('This word is a palindrome')
    } else {
      console.log('This word is not a palindrome')
    }
    rl.close();
  })

function ispolindrome(str){
    str =str.toLocaleLowerCase();
    return Array.from(str).toString() === Array.from(str).reverse().toString();
}