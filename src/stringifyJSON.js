// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } else if (!obj) {
    return 'null';
  }
  
  if (Array.isArray(obj)) {
    var outputArr = [];
    
    for( var i = 0; i < obj.length; i++){
      outputArr.push(stringifyJSON(obj[i]));
    }
    return '[' + outputArr + ']';
    
  } else if (typeof obj === 'object'){
    var outputStr = '';    
    for (var key in obj) {
      console.log('key ' + key);
      console.log('typeof key: ' + typeof(key));
      if(typeof key === 'function' || typeof obj[key] === 'function' || key === undefined || obj[key] === undefined){
        continue;
      }
      outputStr += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }    
    return '{' + outputStr.slice(0, -1) + '}';
  }
};
