let YOB = prompt('What is your Year of Birth?', 1900);

const currentYear = new Date().getFullYear();

if(YOB === null) {
    YOB = 1900
}

alert(`You are ＄{currentYear - YOB} years old!`);

if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

  if (number > 0) {
    console.log("The number is positive");
  }
  // if number is not greater than 0
  else {
    console.log("The number is either a negative number or 0");
  }

  var i = 10;
      
    if (i == 10) {
      
      
      if (i < 15)
        console.log("i is smaller than 15");
      if (i < 12)
        console.log("i is smaller than 12 too");
      else
        console.log("i is greater than 15");
    }