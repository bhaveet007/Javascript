function diffArray(arr1,arr2){
  var newArr=[];
  function onlyInFirst(first,second){
    for(var i=0;i<first.length;i++){
      if(second.indexOf(first[i])==-1){
        //pushing the elemnt unique to first new array
        newArr.push(first[i]);
         
         }
    }
    
  }
  onlyInFirst(arr1,arr2);
  onlyInFirst(arr2,arr2);
  
  return newArr;
}
console.log(diffArray([1,2,3,5,7],[1,2,3,4,5,8,9]));