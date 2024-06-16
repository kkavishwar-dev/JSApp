
let child = null;

(function parent(){
  let numOfPassengers = 100;

  function addPassenger(){
    numOfPassengers++;
    console.log(`in child ${numOfPassengers}`);
  }
  
  child = addPassenger;
})();

child();





