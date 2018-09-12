//(eg)GCG returns [['G','C'],['C','G'],['G','C']]
function pairElement(str){
 //define a map object
  var map={T:'A',A:'T',G:'C',C:'G'};
  //split string into a char array
 strArr = str.split('');
  //replace each array item with a 2d using map
  for(var i=0;i<strArr.length;i++){
    strArr[i]=[strArr[i],map[strArr[i]]];
  }
  return strArr;
  
}
console.log(pairElement("ATGC"));