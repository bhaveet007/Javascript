function translatePigLatin(str){
  var strArr  = [];
  var tmpchar;
    //check if the char is consonant using RegEx
  function isConsonant(char){
    return !/[aeiou]/.test(char)
  }
  //return initial str + "way" if it starts with vowel
  //if not -convert string to array
  if(!isConsonant(str.charAt(0)))
    return str+"way";
  else
    strArr=str.split("");
  //push all consonats to the end of the array
  while(isConsonant(strArr[0])){
    tempChar=strArr.shift();//returns the 1st removed item of the array
    strArr.push(tempChar);
  }
  //convert array to the string and concatenate "ay" at the end
  return strArr.join("")+"ay";
}
console.log(translatePigLatin("aeiou"));