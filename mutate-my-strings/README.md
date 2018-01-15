# code-301-wars
Code Fellows 301n9

Problem Domain -
I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.
Example:
stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham


Link to problem on [Code Wars Kata - Mutate My Strings](https://www.codewars.com/kata/mutate-my-strings/train/javascript)

Solution -
I used 2 placeholder strings, 1 for the newly mutated word, the other string holds the final formatted string. I split a word into individual characters then iterated over that array of characters to transform string1 into string2. 