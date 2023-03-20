/**
 * this function will take input to beep in specific intervals based on time
 * @param {values} input time
 */
//pseudo code
//array to store time
//loop through array
//set time delay based on input param

//CLI acceptance
let time = process.argv.slice(2);
time = time.map((number) => {return Number(number * 1000)});
console.log(typeof time[0]);
console.log(time);
//Functionn

const timer = function (time) {
  console.log(time);
  //edge case 1 no values
  if (time.length === 0) {
    console.log(`you did not provide a number`)
  }
  for (element of time) {
    if (element < 0) {
      console.log("no sound - negative num");
    } else if (isNaN(element)) {
      console.log("no sound - NaN");
    } else {
    setTimeout(() => {
      process.stdout.write('\x07 sound!');
    }, element)}//element is already a number
    //console.log(time[element]);
  }
}

timer(time)//need this to run function


//timer([1000, 2000, 3000, 4000]);

