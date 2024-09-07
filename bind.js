const estAmt = function(checkAmt) {
  return this.totalAmt - checkAmt;
}

const checkDetails = { totalAmt: 100 };
const anotherCheck = { totalAmt: 200 };
const thirdCheck = { totalAmt: 300 };

const estimatedAmt = estAmt.bind(checkDetails);
const anotherEstimatedAmt = estAmt.bind(anotherCheck);
const thirdEstimatedAmt = estAmt.bind(thirdCheck);

console.log(estimatedAmt(10));
console.log(anotherEstimatedAmt(20));
console.log(thirdEstimatedAmt(30));