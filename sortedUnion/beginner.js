function uniteUnique(arr1,arr2,arr3){
  //creates an empty array to store our final result
  var finalArray = [];
  
  //loop through the arguments object to truely made the program work with two or more arrays
  //instead of 2
  for(var i=0;i<arguments.length;i++){
    var arrayArguments = arguments[i];
    //loop through the array at hand
    for(var j=0;j<arrayArguments.length;j++){
      var indexValue = arrayArguments[j];
      //check if the value is already on final array.
      if(finalArray.indexOf(indexValue)<0){
        finalArray.push(indexValue);
      }
    }
}
  return finalArray;
  
}
console.log(uniteUnique([1,3,2],[5,2,1,4],[2,1]));