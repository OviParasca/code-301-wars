# code-301-wars
Code Fellows 301n9

Problem Domain -
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
Good luck!

Link to problem on [Code Wars Kata - Alternating Capitalization](https://www.codewars.com/kata/alternate-capitalization/javascript)

Solution -
I used 2 for loops, 1 loop to make sure i return 2 words, and the other loop iterates through the length of the word and formats the letters according to the desired format, in this case alternating caps (one word odd letters and the other even letter).