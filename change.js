



// for the scroll to top button

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





// var fruits = document.getElementById("Test");

// [].slice.call(fruits.options)
//   .map(function(a){
//     if(this[a.value]){ 
//       fruits.removeChild(a); 
//     } else { 
//       this[a.value]=1; 
//     } 
//   },{});




// [].slice.call(fruits.options)
//   .map(function(a){
//     if(this[a.innerText]){ 
//       fruits.removeChild(a); 
//     } else { 
//       this[a.innerText]=1; 
//     } 
//   },{}); 

//   [].slice.call(fruits.options)
//   .map(function(a){
//     if(this[a.innerText]){ 
//       if(!a.selected) fruits.removeChild(a); 
//     } else { 
//       this[a.innerText]=1; 
//     } 
//   },{}); 

// function removeDuplicateOptions(selectNode)
// {
//     if(typeof selectNode === "string")
//     {
//         selectNode =  document.getElementByID(selectNode);
//     }
//     var seen = {},
//         options = [].slice.call(selectNode.options),
//         length = options.length,
//         previous, 
//         value,
//         text,
//         i;
//     for (i = 0; i< length; 1+=1)
//     {
//         option = options[i];
//         value = option.value,
//         text = option.firstChild.nodeValue ;
//         previous = seen [value];
//         if (typeof previous === "string" && text === previous)
//         {
//             selectNode.removeChild(option);
//         }
//         else{
//             seen[value]= text;
//         }
//     }
// }
// removeDuplicateOptions("Test")

