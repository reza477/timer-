// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, 
// at which point the program should say "Thanks for using me, ciao!" before terminating


// "use strict";

const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit("Thanks for using me, ciao!");
  }
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  if (key >= 1 && key <= 9) {
    console.log("setting timer for " + key +  " seconds..." )
    setTimeout(() => {
      process.stdout.write('\x07');
            }, key * 1000)
    ;
  }
  // process.stdout.write('.');
});

console.log('set Timer for : ');



// const alarm = function (arr, callback) {
//   // console.log(arguments);
//   for (var i = 0; i < arr.length; i ++) {
//     if (arr[i] >= 0 && !isNaN(Number(arr[i]))) {
//       setTimeout(() => {
//         callback();
//       }, Number(arr[i]) * 1000)
//     }
//   }

 
// }


// alarm(process.argv.slice(2), () => {
//   process.stdout.write('\x07');
// });
// alarm([-3]);
// alarm(NaN);


// function add() {
//   return arguments[0] + arguments[1];
// }

// add(2 , 3);