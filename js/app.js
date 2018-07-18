

// SECTION 1
// 1. Interpolation - inserting a constant or variable
// let name = "Batman"
// let nameString = "Oh crap, its ${name}"

// Concatenation - adding data (strings) together:
// let food = ingredients + cooking;

// 2. DRY - Don't Repeat Yourself
// So we don't end up writing the same thing over and over. Makes code more compact, streamlined, and easier to read
// For/while loops, interpolation, etc


// SECTION 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

a < b;
c > d;
'Name' === 'Name';
a < b !== c;
a == a < d;
e === 'Kevin';
48 !== '48';


// SECTION 3
// 1. This is an infinite loop because its condition is always true

// 2. Not an infinite loop b/c after it runs once, its condition will change from true to false

// 3. It will print the letter "A" 20 times, so "AAAAAAAAAAAAAAAAAAAA," effectively screaming at me


// SECTION 4
// 1. A for loop is designed to iterate only a finite amount of times. While loops will iterate as long as their condition remains true.

// 2.
for (let i = 0; i <= 999; i++){
  console.log(i);
}

// 3.
// 1st part - Initializer - Sets up situation
// 2nd part - Condition - Gets evaluated each time we're about to execute the block
// 3rd part - Final Expression - Gets evaluated immediately after the block executes, but before the condition is evaluated again

// 4.
for (let i = 999; i >= 0; i--){
  console.log(i);
}

// 5. 
for (let i = 1; i <= 10; i++){
  console.log(`i is: ${i} of 10`)
}








