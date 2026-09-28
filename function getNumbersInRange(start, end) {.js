// ---------- Problem 1: Range Builder ----------
// Return an array of every integer from start to end, inclusive.
// Use a for loop and .push() to build the array one number at a time.
function getNumbersInRange(start, end) {
  // TODO: your code here
  const result = [];

  for (let i = start; i <= end; i++) {
  result.push(i);}
 // return result;
}

console.log(getNumbersInRange(1, 5));  // [1, 2, 3, 4, 5]
console.log(getNumbersInRange(10, 10)); // [10]
console.log(getNumbersInRange(3, 8));  // [3, 4, 5, 6, 7, 8]

  // ---------- Problem 2: Sum a Range ----------
// Return the sum of every integer from start to end, inclusive.
// Use the accumulator pattern: let total = 0; total += i; each pass.
function sumRange(start, end) {
  // TODO: your code here
 let total = 0;

 for (let i = start; i <= end; i++) {
  total += i; }
// return total;
 }
console.log(sumRange(1, 5));   // 15
console.log(sumRange(1, 100)); // 5050
console.log(sumRange(4, 4));   // 4

// ---------- Problem 3: Countdown ----------
// Return an array counting down from n to 1.
// Use a while loop, not a for loop.
function countdown(n) {
  // TODO: your code here
  const result = [];
let i = n;
while (i >= 1) {
 result.push(i); 
i--;
}
// return result;
}

console.log(countdown(5)); // [5, 4, 3, 2, 1]
console.log(countdown(1)); // [1]
console.log(countdown(8)); // [8, 7, 6, 5, 4, 3, 2, 1]\

// ---------- Problem 4: Count the Vowels ----------
// Return the number of vowels (a, e, i, o, u — lowercase only) in str.
// Loop through every index of the string and use an if statement to
// check whether that character is a vowel. Access a character with
// str[i] or str.charAt(i).
function countVowels(str) {
  // TODO: your code here

}

console.log(countVowels("hello"));      // 2
console.log(countVowels("javascript")); // 3
console.log(countVowels("xyz"));        // 0
console.log(countVowels("aeiou"));      // 5
