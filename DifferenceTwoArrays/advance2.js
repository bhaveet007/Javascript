//advanced solution part 2 
function diffArray(arr1, arr2){
  var newArr=[];
  //concatenate and sort the items in asecending order
  var ordArr=arr1.concat(arr2).sort();
  //loop through the ordered array and push to the empty newArr only the items that have 
  //not a twin in the ordered arr (only items that aare not equal to the previous nor to the next items )
  for(var i=0;i<ordArr.length;i++){
    if(ordArr[i]!==ordArr[i+1]&&ordArr[i]!==ordArr[i-1]){
      newArr.push(ordArr[i]);
    }
 }
  return newArr;
}
console.log(diffArray([1,2,3,5,7],[1,2,3,4,5,8,9]));
//7,4,8,9