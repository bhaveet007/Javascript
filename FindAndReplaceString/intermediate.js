//search and replace algo
function myReplace(str,before,after){
  //create a regular expresion
  var re=new RegExp(before,"gi");
  //check whether the first letter is uppercase or not
  if(/[A-Z]/.test(before[0])){
    //change the word to be capitalized
    ///[A-Z]/ is used to check whether the char is upper case
    after=after.charAt(0).toUpperCase()+after.slice(1);
  }
  //replace the origional word with the new one4
  var newStr=str.replace(re,after);
  return newStr;
}
console.log(myReplace("Bhaveet jumped over the earth to moon","jumped","leaped"));