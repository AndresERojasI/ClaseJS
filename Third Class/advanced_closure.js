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

// Let's return the current year
console.log('The current year is: ', year.getYear());

// Let's set our custom year
year.updateYear(2018);
console.log('The new year is: ', year.getYear());

// Now let's increase that year in one
year.increaseYear();
console.log('The new year is: ', year.getYear());