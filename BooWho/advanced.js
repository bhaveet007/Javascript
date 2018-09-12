//we gonna checkout if a value is classified as a boolean parameter
//i.e. true or false it is very simple algo. using return type boolean parameters
function booWho(bool){
  return typeof bool === 'boolean';
  
}
console.log(booWho(null));
console.log(booWho(0));
