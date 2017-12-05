# code-301-wars
Code Fellows 301n9

Problem Domain -
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.
It should look like this:

Sam Harris => S.H
Patrick Feeney => P.F


Link to problem on [Code Wars Kata - Abbreviate a two word name](https://www.codewars.com/kata/abbreviate-a-two-word-name/javascript)


Solution -
Do a global RegEx search for the first character before every space, then join those letters with a period in between them and make all the letters Capitalized to satisfy all of our unit tests.
