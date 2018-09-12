
      //Reverse a string at basic level(beginner)
function reverseString(str){
  str=str.split('');
  str=str.reverse('');
  str=str.join('');
  return str;
  
}
console.log(reverseString("hello"));
console.log(reverseString("howdy"));