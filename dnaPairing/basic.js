//(eg)GCG returns [['G','C'],['C','G'],['G','C']]
function pairElement(str){
  //return each strand as an array of 2 elements , the origional and the pair .
  var paired=[];

  
  //functon to check with which the strand pair
  var search = function(char){
    switch(char){
      case 'A':
        paired.push(['A','T']);
        break;
      case 'T':
        paired.push(['T','A']);
        break;
        case 'C':
        paired.push(['C','G']);
        break;
       case 'G':
        paired.push(['G','C']);
        break;
       
    }
  };
  //loops through the input and pair
  for(var i=0;i<str.length;i++) {
     search(str[i]) ;
    }
  return paired;
  
}
console.log(pairElement("ATGC"));