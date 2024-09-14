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
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Done");
});

setVal("ok - proceed", true);