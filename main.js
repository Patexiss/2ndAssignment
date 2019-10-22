/*1) Write the function printInt(n) taking one parameter n and print all natural numbers from 1 to n in console.*/

function printInt() {
    for(var n=1;n<11;n++){
        console.log(n);
    }
}
printInt(10);

/*2) Write the function printIntRev(n) taking one parameter n and print all natural numbers in reverse in console (from n to 1).
Hint: reverse loop in Q1
*/

function printIntReverse(n){
    for(var n=10;n>0;n--) {
        console.log(n);
    }

}
printIntReverse(10);

/*3) Write the function checkInput(x) taking one parameter x and return the string ‘number’ if x is a number; return the string ‘string’ if x is a string; and return ‘boolean’ if x is a boolean. Otherwise returns -1. 
Examples:
       checkInput(5) ====> ‘number’
       checkInput(‘hello’)======> ‘string’
       checkInput(‘5’) ======> ‘string’
       checkInput(true)=====> boolean
       checkInput([1,2,3,4]) =====> -1
Hint: Check JavaScript typeof 
*/

function checkInput(x){
    if (typeof x === "number") {
return "number";
    }
    else if (typeof x === "string"){
return "string";
    }
    else if (typeof x ===  "boolean"){
    return "boolean";
    }
    else{
    return -1;
}
}

/*4) Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num, and return it 
	Examples: simpleEvenAdding(5) ======> 6 (because 2+4 = 6)
	       simpleEvenAdding(10) ======> 30 (because 2+4+6+8+10 = 30)
	       simpleEvenAdding(11) ======> 30 (because 2+4+6+8+10 = 30)
                  simpleEvenAdding(1) ======> 0
	       simpleEvenAdding(0) =======> 0
Hint: loop + if conditional + %
*/

function simpleEvenAdding(num) {
var solution = 0;
//for simpleOddAdding var i would be equal to 1 in the for(....).
for(var i= 0;i<= num;i+= 2) {

solution += i;
}

return solution;
}
console.log(simpleEvenAdding());

/*5) Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. The given words will be separated by only one space.
	Examples:
		letterCapitalize(“hello world”) ===========> “Hello World”
letterCapitalize(“you cannot find the answer online”) =====>  “You Cannot Find The Answer Online”
	
Hint: There is a built-in function in JavaScript that change string into uppercase. There is also a function to separate string into an array of words. (split)*/

function letterCapitalize(str) {
var solution = [];
//separate words
var words = str.split(" ");
// first char of each word
// capitalize it
var length = words.length;
for(var i=0; i<length; i++) {
solution.push(words[i][0].toUpperCase() + words[i].slice(1));
}
return solution.join(1);
}
console.log(letterCapitalize("hello world"));

/*6) Write the function simpleReverse(str) taking a string and return the string in reverse order. 
	Examples:
		// simpleReverse(‘hello’) ======> ‘olleh’
		// simpleReverse(‘I Love Code’) ======> ‘edoC evoL I’

Hint: Think of how you can loop through a string or array of characters backwards to produce a new string*/

function reverseString(str) {
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

/*7) Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the maximum number and the minimum number (max - min). 
	Examples:
	findDiff([1,2,4,6,20, 3]) =======> 19 (Because 20 - 1 = 19)
	findDiff([24, 22, 23, 22, 24]) =======> 2 (Because 24 - 22 = 2)
	findDiff([1, 1, 1, 1, 1]) =======> 0 
findDiff([1]) ======> 0;
findDiff([]) =======> 0;
Hint: Looking for max, min -> max - min.*/

function findDiff(arr) {
    ( Math.max(...arr)-Math.min(...arr));
 }
console.log(findDiff([6,7,8,9]));


/*8) Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.
	Example:
		timeConvert(61) ======> 1:1
		timeConvert(63) =======> 1:3
		timeConvert(120)======> 2:0
		timeConvert(59)=======> 0:59
    	Hint: Dividing(/) and modulo(%) the number 60.*/

        function timeConvert(num) {
            var hour = parseInt(num / 60);
            var min = num % 60;
            return hour + ":" + min;
        }
        //9:15
        console.log(timeConvert(555));

/*9) Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long. Assume Str is not empty string.
        Example:
            findStr(“hi”, “dasdhidasdahidashi”) =======> 3
            findStr(“o”, “daodo”) =======> 2
            findStr(“ha”,”abcde”)=======> 0
            findStr(“h”, “hihelloho”)======> 3
        Hint: loop through the long, to check if there is any str*/

        function findStr(str, long) {
            var longLength = long.length;
            var strLength = str.length;
            //counter to count the number of str in long
            var counter = 0;
            for(var i=0;i<longLength - strLength;i++){
                if(str === long.slice(i,i+str.Length)) {
                    counter++;
                }
            }
            return counter;
        }
        //ANOTHER SOLUTION WITH SHORTER CODE
        //return long.split(str).length - 1; }
        //ALONG WITH THE FUNCTION findStr {} ABOVE & CONSOLE.LOG BELOW.
        console.log(findStr("pat", "patexisspatriciapat"));
        
        
/*10) Write the function selfDividingNumbers(left, right) taking two number bound as parameters and returns an array of every possible self dividing number between 
        them, including the bounds. 
        
        Hint: A self-dividing number is a number that is divisible by every digit it contains. For example, 128 is a self-dividing number because 128 % 1 ==0, 128 % 2 == 0 and 128 % 8 == 0. 
        
        Examples:
            selfDividingNumbers(1, 22) ========> [1,2,3,4,5,6,7,8,9,11,12,15,22]
            selfDividingNumbers(1, 10) =======> [1,2,3,4,5,6,7,8,9]
        selfDividingNumbers(12, 21) =======> [12, 15]*/

        function selfDividingNumbers(left, right) {
            //loop from left to right
            var solution = [];
            for (var i=left; i<=right; i++) {
                //check if current number is self dividing number
            if(checkSelfDividing(i)) {
                solution.push(i);
            }
            }
            return solution;
        }
        //helper function to check if the num is self-dividing
        function checkSelfDividing(num) {
        //change number into string format
            var numString = num.toString();
        //split string into array of char
        var numArray = numString.split("");

        var length = numArray.length;
        for(var i=0; i<length;i++) {
            // if num isn't divisible by any digit
            if(num % parseInt(numArray[i]) !== 0) {
                return false;

            }        
        }

        return true;
        }

        
/*11) Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while maintaining the relative order of the non-zero elements.  For example:
        moveZeros([0,1,0,3,12]) ======> [1,3,12,0,0]
        moveZeros([1,2,0,0,2,312,33,0,0]) ======> [1,2,2,312,33,0,0,0,0]
        moveZeros([0,0,0]) ======> [0,0,0]
        moveZeros([1,2,312,11,2]) =======> [1,2,312,11,2]*/

function moveZeros(nums){
    var solution = [];
    var length = numbs.length
    //loop through the array
    for(var i=0;i<length;i++){
        if (nums[i] === 0) {
            counter++;

        } else{
            solution.push(nums[i])
    }
}
//adding 0's
 while (counter >0) {
     solution.push(0);
     counter--;
 }
 return solution;
}

        
/*12) Create an average(nums) function that calculates the average of an array of numbers.
        Examples: 
            average([2, 6]) =====> 4
            average([2, 3, 3, 5, 7, 10]) ======> 5
        average([7, 1432, 12, 13, 100]) ======> 312.8
        average([]) ======> 0
        
        Hint: Sum of all elements / number of elements*/
        
function average(nums) {
    var sum = 0;
    var length = nums.length;
    for (var i = 0; i < length; i++){
        sum+= nums[i];
    }
    //sum/length
    return sum/length;
}
