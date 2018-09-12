//we find the missing letter from the string if found 
//return the string if not return undefined
//no test case for more than one letter
//but for one is defined then recursion would be used
//letters are always provided inorder so no need to sort them.
function fearNotLetter(str){
	for(var i=0;i<str.length;i++){
		/**code of current char */
		var code =str.charCodeAt(i);
		/* if code of current char is not equal to first char
		+no of iterations .hence the character has been escaped  */
      if(code!==str.charCodeAt(0)+i){
        /*if current char has escaped one char find previous and return*/
        return String.fromCharCode(code-1);
      }


	}
  return undefined;
  
}
console.log(fearNotLetter("ce"));