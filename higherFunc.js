const getInput = function(inputVal, validator){
  if(validator){
    if(validator(inputVal)){
      return inputVal;
    }
  }
  return 0;
}
const validateRange = function (min, max){
   const returnFunc = function(inputValue){
      let tmp = Number(inputValue);
      if(!Number.isInteger(tmp) || inputValue > max || inputValue < min){
        return false;
      }
      return true;
   }
   //return inner function that has access to min and max arguments
   return returnFunc;
}

const vr = validateRange(50,100);
console.log(vr);
const a = getInput(75, vr);
console.log(a);
