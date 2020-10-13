function isItPalindrome() {
  let initialWordInput = prompt("What word would you like to check to see if it's a palindrome?");
   let initialWord = initialWordInput.toLowerCase();
   let initialWordReverse = initialWord.split('').reverse().join('');
   
   if (initialWord == initialWordReverse) {
     alert(`The word ${initialWordInput} is a palindrone!`)
   } else {
     alert(`The word ${initialWordInput} is not palindrone.`)
   }
   
 }
 
 isItPalindrome();