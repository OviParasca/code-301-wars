# code-301-wars
Code Fellows 301n9

Problem Domain -
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.


Link to problem on [Code Wars Kata - Highest Scoring Word](https://www.codewars.com/kata/highest-scoring-word/train/javascript)


Solution -
I split each word up and gave each word it's score and added those to an array, that array then i iterated through and found the highest number and returned it's index. I used that index to cross-reference the corresponding word in the original string.