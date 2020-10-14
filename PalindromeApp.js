//submission button
let submitButton = document.getElementById('submitButton');
//calls Palindrome fuction to act when the button is pressed
submitButton.addEventListener('click', isItPalindrome);


function isItPalindrome(inputData) {
  //let initialWordInput = prompt("What word would you like to check to see if it's a palindrome?");
   let initialWord = inputData.toString().toLowerCase();
   let initialWordReversed = inputData.toString().split('').reverse().join('');
   
  //  if (initialWord == initialWordReversed) {
  //    alert(`The word ${inputData} is a palindrone!`)
  //  } else {
  //    alert(`The word ${inputData} is not palindrone.`)
  //  }
   
};
 
//collects the input value given by user, and stores it in variable value
let value = document.getElementById('wordCollector').value;
//replaces text in the answer display region with the text stored in variale notification
let notification = document.getElementById('displayPanel');

if (initialWord == initialWordReversed) {
  console.log(`The word ${inputData} is a palindrone!`)
  notification.innerHTML = `The word ${inputData} is a palindrone!`;
} else {
  console.log(`The word ${inputData} is not a palindrone.`)
  notification.innerHTML = `The word ${inputData} is not a palindrone!`;
}

inputData.preventDefault(inputData);
