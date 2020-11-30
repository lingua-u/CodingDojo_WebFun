// Coding Dojo's Algorithms Book - Part 1
// My Solutions

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

for (let integers =-52; integers<=1066; integers++) {
    console.log(integers);
}

// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log
// string "good morning!" Call it 98 times.

function beCheerful() {
    console.log("good morning!")
}
for (let x = 1; x<=98; x++) {
    beCheerful();
}

// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0.
// Skip -3 and -6.

for (let m = -300; m<=0; m+=3) {
    if (m == -3 || m == -6) {
        continue;
    }
    console.log(m);
}

// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

let i = 2000; 
while (i <=5200)
{
    console.log(i);
    i++;
}

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month
// and day in either order, log "How did you
// know?", else log "Just another day...."

let given1 = 3;
let given2 = 9;
if (given1 == 9 || given1 == 3 && given2 == 9 || given2 == 3) {
    console.log("How did you know?");
} else {
    console.log("Just another day....");
    }

// Leap Year
// Write a function that determines whether a given
// year is a leap year. If a year is divisible by four,
// it is a leap year, unless it is divisible by 100.
// However, if it is divisible by 400, then it is.

let year = 2020;
function isLeapYear() {
    return (year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0);  
        }
console.log(isLeapYear(year));

// Print and Count
// Print all integer multiples of 5, from 512 to 4096.
// Afterward, also log how many there were.

let counter=0;
for (let m=512; m<=4096; m++) {
    if (m % 5 == 0) {
        console.log(m);
        counter++
        };
}
console.log(`Number of times: ${counter}`);

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.

let mu = 1;
while (mu<=60000) {
    if (mu % 6 == 0) {
    console.log(mu);
} 
mu++;
}

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print
// "Coding" instead. If by 10, also print " Dojo".

for (let num = 1; num<=100; num++) {
    if (num % 5 == 0) {
        console.log('Coding');
        if (num % 10 == 0) {
        console.log('Dojo');
    }
}
console.log(num);
}

// What Do You Know?
// Your function will be given an input parameter
// incoming. Please console.log this value.

function Hello(parameter) {
    console.log(parameter);
}
Hello('Howdy');

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and
// console.log the final sum. Is there a shortcut?

let oddsum = 0;
for (let i =-300000; i<=300000; i++) {
    if (i % 2 == 0) {
        oddsum = oddsum+i;
    }
}
console.log(`The sum of odd numbers: ${oddsum}`);