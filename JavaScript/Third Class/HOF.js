/**
 * Created by andresrojas on 3/17/17.
 */
function logWrapper (data) {
  console.log('Logged thing: ', data)
}

function multiplication(a, b, callback) {
  var result = a * b;

  if (typeof callback === 'function') {
    callback(result);
  }
}

multiplication(100, 255);

multiplication(234, 4657, logWrapper);

multiplication(2, 6, function (newData) {
  console.log('Anonymous callback', newData * 3);
});