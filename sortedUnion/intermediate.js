function uniteUnique(arr1,arr2,arr3){
  var newArr;
  //convert the object into an array
  var args = Array.prototype.slice.call(arguments);
  
  
  //use the reduce fxn to flatten the array
  newArr=args.reduce(function(arrA,arrB){
    //apply the filter array method to remove the duplicates in the array
      return arrA.concat(arrB.filter(function(i){
    return arrA.indexOf(i)===-1;
  }));
  });
return newArr;
                     }
}
console.log(uniteUnique([1,3,2,1],[5,2,1,4],[2,1]));