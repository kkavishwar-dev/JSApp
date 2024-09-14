const cc = function(initVal = 0) {
  let counter = initVal;

  const ic = () => {
    console.log(`in inner function ${counter}`);
    return ++counter;
  }
  return ic;
}

const a = cc(10);
console.log(a);
console.log(a());
console.log(a());
console.log(a());