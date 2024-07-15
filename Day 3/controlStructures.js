// Activity 1: If-Else Statements
// Task 1
function checkNumberSign(num) {
  if (num > 0) {
    console.log("The number is positive.");
  } else if (num < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
}

checkNumberSign(10);
checkNumberSign(-5);
checkNumberSign(0);

// Task 2
function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("Eligible to vote.");
  } else {
    console.log("Not eligible to vote.");
  }
}

checkVotingEligibility(20);
checkVotingEligibility(16);

// Activity 2: Nested If-Else Statements
// Task 3
function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    console.log("The largest number is:", a);
  } else if (b >= a && b >= c) {
    console.log("The largest number is:", b);
  } else {
    console.log("The largest number is:", c);
  }
}

findLargest(10, 20, 5);
findLargest(3, 3, 1);

// Activity 3: Switch Case
// Task 4
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day number");
  }
}

getDayName(1);
getDayName(5);

// Task 5
function getGrade(score) {
  switch (true) {
    case score >= 90:
      console.log("Grade: A");
      break;
    case score >= 80:
      console.log("Grade: B");
      break;
    case score >= 70:
      console.log("Grade: C");
      break;
    case score >= 60:
      console.log("Grade: D");
      break;
    default:
      console.log("Grade: F");
  }
}

getGrade(95);
getGrade(75);

// Activity 4: Conditional (Ternary) Operator
// Task 6
function checkEvenOdd(num) {
  let result = num % 2 === 0 ? "Even" : "Odd";
  console.log("The number is:", result);
}

checkEvenOdd(4);
checkEvenOdd(7);

// Activity 5: Combining Conditions
// Task 7
function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
}

checkLeapYear(2020);
checkLeapYear(1900);
checkLeapYear(2000);

// Feature Request: Number Check Script
function numberCheckScript(num) {
  checkNumberSign(num);
}

numberCheckScript(-1);
numberCheckScript(0);

// Feature Request: Voting Eligibility Script
function votingEligibilityScript(age) {
  checkVotingEligibility(age);
}

votingEligibilityScript(18);
votingEligibilityScript(15);

// Feature Request: Day of the Week Script
function dayOfTheWeekScript(dayNumber) {
  getDayName(dayNumber);
}

dayOfTheWeekScript(3);
dayOfTheWeekScript(8);

// Feature Request: Grade Assignment Script
function gradeAssignmentScript(score) {
  getGrade(score);
}

gradeAssignmentScript(85);
gradeAssignmentScript(50);

// Feature Request: Leap Year Check Script
function leapYearCheckScript(year) {
  checkLeapYear(year);
}

leapYearCheckScript(2024);
leapYearCheckScript(2100);
