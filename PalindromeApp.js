
let submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', isItPalindrome);



function isItPalindrome(inputData) {
  //let initialWordInput = prompt("What word would you like to check to see if it's a palindrome?");
   let initialWord = initialWordInput.toLowerCase();
   let initialWordReverse = initialWord.split('').reverse().join('');
   
   if (initialWord == initialWordReverse) {
     alert(`The word ${initialWordInput} is a palindrone!`)
   } else {
     alert(`The word ${initialWordInput} is not palindrone.`)
   }
   
 }
 
isItPalindrome();

let value = document.getElementById('wordCollector').value;
let notification = document.getElementById('displayPanel');



 
// // Create a "close" button and append it to each list item
// let myNodelist = document.getElementsByTagName("LI");
// let i;
// for (i = 0; i < myNodelist.length; i++) {
//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }
// // Click on a close button to hide the current list item
// let close = document.getElementsByClassName("close");
// let i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//   let div = this.parentElement;
//   div.style.display = "none";
//   }
// }





// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   let li = document.createElement("li");
//   let inputValue = document.getElementById("myInput").value;
//   let t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//    alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";
//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);
//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//         let div = this.parentElement;
//         div.style.display = "none";
//     }
//   }
// }
// //Clearing the list
// function removeAll(){
//   var lst = document.getElementsByTagName("ul");
//     lst[0].innerHTML = "";
// }