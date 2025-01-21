let resolveHandler = undefined;
let rejectHandler = undefined;

const retPromise = new Promise((resolve,reject) => {
    resolveHandler = resolve;
    rejectHandler = reject;
});

const setVal = (msg, isRes) => {
    setTimeout(() => {
      if (isRes) 
        resolveHandler(msg)
      else
        rejectHandler("Something went wrong");
    }, 4000);
};

retPromise.then((val) => {
    console.log(val);
    console.log(retPromise);
}).catch((err) => {
    console.log(err);
    console.log(retPromise);
}).finally(() => {
    console.log("Done");
});


setVal("ok - proceed", true);