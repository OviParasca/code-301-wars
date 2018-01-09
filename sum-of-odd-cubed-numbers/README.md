# code-301-wars
Code Fellows 301n9

Problem Domain -
Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined (NULL in PHP) if any of the values aren't numbers.
Note: There are ONLY integers in the JAVA and C# versions of this Kata.


Link to problem on [Code Wars Kata - the sum of odd, cubed numbers](https://www.codewars.com/kata/sum-of-odd-cubed-numbers/train/javascript)

Solution -
We used a ternary of higher-order functions to satisfy the probem nice and neat in a one-liner :)
We iterated through the array to see if the array contained all number (array.every()), if it didn't then we returned undefined. If it contained numbers, then we cubed each odd number then reduced it to a single value.
