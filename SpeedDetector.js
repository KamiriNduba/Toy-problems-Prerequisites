const readline = require('readline');

function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

  if (speed < speedLimit + kmPerDemeritPoint) {
    console.log("Ok");
    return 0; // No demerit points
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints >= 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
    return demeritPoints;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the car's speed: ", function(speed) {
  calculateDemeritPoints(Number(speed));
  rl.close();
});
