//jshint esversion:6

exports.getDate = function() {
  const today = new Date();

  // js
  // let currentDay = today.getDay();
  // let day = "";


  // if(currentDay === 6 || currentDay === 0){
  //   // res.write("<h1>Yay it's the weekend!</h1>");
  //   // // res.send();
  //   // res.sendFile(__dirname + "/index.html");
  //   day = "Weekend";
  // } else{
  //   // res.write("<p>Boo! I have to work!</p>");
  //   // res.write("<p>Boo! I have to work!</p>");
  //   // // res.send();
  //   // res.sendFile(__dirname + "/index.html");
  //   day = "Weekday";
  // }

  //  ejs template
  // switch (currentDay){
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //     console.log("Error: current day is equal to "+ currentday);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
}

module.exports.getDay = getDay();
function getDay() {
  const today = new Date();
  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
}
