const originalObject = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
};

const shallowCopy = { ...originalObject };

delete shallowCopy.b.c;

console.log(JSON.stringify(originalObject));
// Expected output: { a: 1, b: { d: 3 } }

console.log(JSON.stringify(shallowCopy));
// Expected output: { a: 1, b: { d: 3 } }