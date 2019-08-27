"use strict";

const alarm = function (arr, callback) {
  // console.log(arguments);
  for (var i = 0; i < arr.length; i ++) {
    if (arr[i] >= 0 && !isNaN(Number(arr[i]))) {
      setTimeout(() => {
        callback();
      }, Number(arr[i]) * 1000)
    }
  }

 
}


alarm(process.argv.slice(2), () => {
  process.stdout.write('\x07');
});
// alarm([-3]);
// alarm(NaN);


// function add() {
//   return arguments[0] + arguments[1];
// }

// add(2 , 3);