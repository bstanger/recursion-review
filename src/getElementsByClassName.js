// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  console.log(document.body);
  var helperArr = [];
  console.log(document.body.classList.value);
  
  if(document.body.classList.value === className) {
    helperArr.push(document.body)
  } 
  
  var searchForChildren = function(element){
    if(element.classList.includes(className)){
      helperArr.push(element);
    }
    if(element.childNodes){
      searchForChildren(element);
    }
  };
  
  
  return helperArr
};

//look for child of elements 
//do recursion for it 