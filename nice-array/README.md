# code-301-wars
Code Fellows 301n9

Problem Domain -
A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.
example:
[2,10,9,3] is Nice array because

2=3-1
10=9+1
3=2+1
9=10-1
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.



Link to problem on [Code Wars Kata - nice array](https://www.codewars.com/kata/nice-array/train/javascript)

Solution -
I figured we need to loop through the array once for each digit, then loop again for each digit to compare against if it's within 1 (x-1 || x+1). After figuring out the solution based on the current syntax that i know in JS, i found a great 1 line solution using array.every(array.some) to fully satisfy the requirements, so i learned some new syntax after i committed my assignment. :)
