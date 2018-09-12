//search and replace algo
function myReplace(str,before,after){
//create a fxn that will change the casing of any number of letter in parameter "target"
  //matching parameter source
  function applyCasing(source,target){
    //split the source and target strings to array of letters
    var targetArr=target.split("");
    var sourceArr=source.split("");
    
    
    //iterate through all the items of sourceArr and targetArr arrays until loop hits the 
    for(var i=0;i<Math.min(targetArr.length,sourceArr.length); i++){
      //find out the casing of every letter from sourceArr using regular expression
      //if sourceArr[i] is uppercase then convert targetArr[i] to uppercase
      if(/[A-Z]/.test(sourceArr[i])){
        targetArr[i]=targetArr[i].toUpperCase();
      }else{
        //if sorceArr[i] is not uppercse then convert targetArr[i] to lowercase
        targetArr[i]=targetArr[i].toLowerCase();
      }
      //join modified targetArr to string and return
      return (targetArr.join(""));
    }
  }
  //replace "before" with "after" with "before" -casing
  return str.replace(before,applyCasing(before,after));
}
console.log(myReplace("Bhaveet jumped over the earth to moon","jumped","leaped"));