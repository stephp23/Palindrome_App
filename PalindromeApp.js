//submission button
let submitButton = document.getElementById('submitButton');
//calls Palindrome fuction to act when the button is pressed
submitButton.addEventListener('click', isItPalindrome);


function isItPalindrome(inputData) {
  //let initialWordInput = prompt("What word would you like to check to see if it's a palindrome?");
  function isPalindrome(inputData) {
    let initialWord = inputData.toLowerCase();
    let initialWordReversed = initialWord.toString().split('').reverse().join('');

    //compares initial word to the same word in reverse, definition of a palindrome
    return initialWord == initialWordReversed ? true : false;
    
  };
   
  //collects the input value given by user, and stores it in variable value
  let value = document.getElementById('wordCollector').value;
  //replaces text in the answer display region with the text stored in variale notification
  let notification = document.getElementById('displayPanel');

  if (isPalindrome(value) === true) {
    console.log(`The word ${value} is a palindrone!`)
    notification.innerHTML = `The word ${value} is a palindrone!`;
  } else {
    console.log(`The word ${value} is not a palindrone.`)
    notification.innerHTML = `The word ${value} is not a palindrone!`;
  }

  inputData.preventDefault(inputData);
  
};
