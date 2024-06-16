const getInput = function(inputVal, validator)
{
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
   return returnFunc;
}

var employee = {};
employee.id = getInput(101, validateRange(50, 100));
console.log(employee.id);
