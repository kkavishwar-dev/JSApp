
const myArray = [1,2,3,4,5];

const addNumber = (numToAdd) => {
    return (number) => {
        //inner function has access to outer functions arguments and private variables
        console.log(`inner function ${number} ${numToAdd}`);
        return number + (numToAdd ? numToAdd : 10);
    }
}

const addNum = addNumber(500);
console.log(addNum);
console.log(myArray.map(addNum));