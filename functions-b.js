const sumValues = function(){
  let sum = 0;
  for(let i=0; i<arguments.length; i++){
    sum += arguments[i];
  }
  console.log(`total ${sum}`);
  return sum;
}
const tmp = sumValues(2,5,10);

const convertToGallons = function(gallons){
    return gallons * 3.785;
}
 console.log(convertToGallons(10));
