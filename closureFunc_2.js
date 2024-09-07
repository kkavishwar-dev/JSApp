const cc = function(init) {
  var counter = init ? init : 0;

  const ic = () => {
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