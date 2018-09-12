function sumAll(arr){
  //we will use ES6
  var sortArr=arr.sort((a,b)=>a-b);
  var firstNum=arr[0];
  var lastNum=arr[1];
  //sum of an A.P.
  var sum=(lastNum-firstNum+1)*(firstNum+lastNum)/2;
  return sum;
}
console.log(sumAll([3,1]));
console.log(sumAll([1,4]));