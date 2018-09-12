//search and replace algo
function myReplace(str,before,after){
  //find index where before is on string
  var index=str.indexOf(before);
  //if the ist letter is uppercase or not
  if(str[index]==str[index].toUpperCase()){
    //change the after word to be capitalized before we use it.
    after=after.charAt(0).toUpperCase()+after.slice(1);//charAt(0)to read the first char of the string
    
  }
  //now replace the origional string with the edited one 
  str=str.replace(before,after);
  return str;
  
}
console.log(myReplace("Bhaveet jumped over the earth to moon","jumped","leaped"));