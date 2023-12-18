function calculateGrade(mark) {
    if (mark > 79) {
      return 'A';
    } else if (mark >= 60 && mark <= 79) {
      return 'B';
    } else if (mark >= 50 && mark <= 59) {
      return 'C';
    } else if (mark >= 40 && mark <= 49) {
      return 'D';
    } else {
      return 'E';
    }
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Enter the student's mark (between 0 and 100): ", function(mark) {
    const grade = calculateGrade(Number(mark));
    console.log(`The grade for the mark ${mark} is: ${grade}`);
    rl.close();
  });
  