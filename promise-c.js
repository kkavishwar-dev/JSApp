const isValidAddress = false;

const deliverPackage = new Promise((resolve, reject) => {
  const itemOrdered = {
    brand: 'apple',
    color: 'maroon',
    type: 'iPhone-15'
  };
  if(isValidAddress){
    setTimeout(() => {
      resolve(itemOrdered);
    }, 3000);
  } else {
    setTimeout(() => {
      reject('Invalid Address, shippment cancelled');
    }, 3000);
  }
});

console.log(deliverPackage);
const isShipmentReceived = () => {
  deliverPackage
    .then(res => {
      console.log(res);
      console.log(deliverPackage);
  })
    .catch(err => {
      console.log(err);
      console.log(deliverPackage);
  });
};

isShipmentReceived();