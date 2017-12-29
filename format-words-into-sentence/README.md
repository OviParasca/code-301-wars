# code-301-wars
Code Fellows 301n9

Problem Domain -
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.


Link to problem on [Code Wars Kata - Format Words Into Sentence](https://www.codewars.com/kata/format-words-into-a-sentence/train/javascript)

Solution -
We filtered out the empty words so we're left with an array of actual words, after which we checked the index of the words and appended/prepended the proper character/word we needed to satisfy our requirements.