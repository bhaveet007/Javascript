function sumAll(arr){
  var sum=0;
  //spread operator ES7
 for(var i=Math.min(...arr);i<=Math.max(...arr);i++ ){
   sum+=i;
 }
  return sum;
}
console.log(sumAll([3,1]));
console.log(sumAll([1,4]));