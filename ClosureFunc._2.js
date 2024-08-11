
const cc = function() {
  var counter = 0;

  const ic = function() {
    console.log(`in inner function ${counter}`);
    return counter++;
  }

  return ic;
}

const a = cc();
console.log(a);
console.log(a());
console.log(a());
console.log(a());