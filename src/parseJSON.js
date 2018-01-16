// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  console.log('json input: ', json);
  console.log('json first value', json.slice(0, 1));
  console.log('json last value', json.slice(-1));
  // console.log('new last', json.slice(json.length - 1, 1))
  
  // Handle arrays
  if (json.slice(0, 1) === "[" && json.slice(json.length - 1) === ']') {
    var arrayOutput = [];
    console.log("without first brackets", json.slice(1));
    console.log('json length', json.length);
    var temp = json.substring(1, json.length);
    // console.log("without first or last brackets", json.slice(1).slice(json.length - 1));
    console.log('temp', temp);

    // console.log('without first: ', )    
    // if(json.split(',')){
      
    // }
    
  } else if (json.slice(0, 1) === "{" && json.slice(json.length - 1) === '}') {
    
  } else {
    return undefined;
    
  }
  // if(json.slice(0, 1) === '[')
};
