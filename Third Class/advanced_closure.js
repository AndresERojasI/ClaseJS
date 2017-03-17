function yearHandler () {
  var currentYear = 2016;

  return {
    updateYear: function(newYear) {
      currentYear = newYear;
    },
    increaseYear: function () {
      currentYear++;
    },
    getYear: function () {
      return currentYear;
    }
  };
}

var year = yearHandler();
var year2 = yearHandler();

// Let's return the current year
console.log('The current year is: ', year.getYear());
console.log('The current year is: ', year2.getYear());

// Let's set our custom year
year.updateYear(2018);
console.log('The new year is: ', year.getYear());
console.log('The new year is: ', year2.getYear());

// Now let's increase that year in one
year.increaseYear();
console.log('The new year is: ', year.getYear());
console.log('The new year is: ', year2.getYear());