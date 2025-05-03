// Debounce function
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Example API call function
function makeApiCall() {
  console.log("API call made at", new Date().toISOString());
}

// Debounced version of the API call function
const debouncedApiCall = debounce(makeApiCall, 500); // 500ms delay

// Example: Attach to a button click
const button = document.getElementById("apiCallButton");
button.addEventListener("click", debouncedApiCall);