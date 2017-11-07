var async = require('async');
// here in waterfall model, the callback result value is saved and passed to the next function
// while in series, the result value is brought to console in main callback function



// async.waterfall([  
//   function firstStep(done) {
//     console.log('start!');

//     done(null, 'Value from step 1'); // <- set value to passed to step 2
//   },
//   function secondStep(step1Result, done) {
//     console.log(step1Result);

//     done(null, 'Value from step 2'); // <- set value to passed to step 3
//   },
//   function thirdStep (step2Result, done) {
//     console.log(step2Result);

//     done(null); // <- no value set for the next step.
//   }
// ],
// function (err) {  
//   if (err) {
//     throw new Error(err);
//   } else {
//     console.log('No error happened in any steps, operation done!');
//   }
// });

/*
async.waterfall([  
  function firstStep() {},
  function secondStep() {}
],
function (err) {});  

*/


//series calls the final callback function on every successful execution of the function in the list.
// async series operation 
async.series([
    function(callback) {
      setTimeout(function() {
        console.log("Task 1");
        callback(null, 1);
      }, 100);
    },
    function(callback) {
      setTimeout(function() {
        console.log("Task 2");
        callback(null, 2);
      }, 200);
    },
    function(callback) {
      setTimeout(function() {
        console.log("Task 3");
        callback(null, 3);
      }, 300);
    }
  ], function(error, results) {
    console.log(results);
  });


  