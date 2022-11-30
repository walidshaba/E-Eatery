









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

// For The Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//End of the slideshow


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