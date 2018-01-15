// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var helperArr = []; 
  var searchForChildren = function(element) {    
    if (element.classList && element.classList.contains(className)) {
      helperArr.push(element);   
    }    
    if (element.childNodes) {
      for (var i = 0; i < element.childNodes.length; i++) {
        searchForChildren(element.childNodes[i]); 
      }
    }
  };
  
  searchForChildren(document.body);
  return helperArr;
};