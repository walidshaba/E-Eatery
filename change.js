









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