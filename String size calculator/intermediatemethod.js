//Advanced solution for finding the largest word
function findLongestWord(str){
     return str.split(' ').reduce(function(x,y){
        return Math.max(x,y.length)
  },0);
}
console.log(findLongestWord("The quick brown car has been released coand give meco feeling"));
            
                         