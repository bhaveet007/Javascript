function sumAll(arr){
  var max =Math.max(arr[0],arr[1]);
    var min =Math.min(arr[0],arr[1]);
  var temp=0;
  for(let i=min;i<max;i++){
    temp=temp+i;
}
  return temp;
}
console.log(sumAll([3,1]));
console.log(sumAll([1,4]));