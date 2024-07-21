
(function currentDt() {
  let currentDt = new Date();
  let minDt = currentDt.setDate(currentDt.getDate() + 1);
  let maxDt = currentDt.setFullYear(currentDt.getFullYear() + 1);

  const formatter = new Intl.DateTimeFormat('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'});
  console.log(`min date ${formatter.format(minDt)}`);
  console.log(`max date ${formatter.format(maxDt)}`)
}());

