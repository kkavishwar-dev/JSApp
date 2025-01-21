const myArray = [{
  id: 1, title: 'Book title 1-'}, {  id: 2, title: 'Book title 2-'}, {  id: 3, title: 'Book title 3-'}];

  const book = { id: 2, title: 'Book title 2-' };
  console.log('is book included - ' + myArray.includes(book));

  const book2 = { id: 4, title: 'Book title 4-' };
  myArray.push(book2);
  console.log('is book2 included -' + myArray.includes(book2));

  myArray.splice(2,1);    //destructive -- toSpliced() - non-destructive
  myArray.forEach((book) => {
    for(const [key, value] of Object.entries(book)){
      console.log(`${key} - ${value}`);
    }
  });