# code-301-wars
Code Fellows 301n9

Problem Domain -
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!


Link to problem on [Code Wars Kata - my head is at the wrong end](https://www.codewars.com/kata/my-head-is-at-the-wrong-end/javascript)

Solution -
The repeating pattern throughout all test cases had the incoming arrays backwards, so we have to mirror the array order. I went the route of having a temporary array and iterating through the array and adding each element to the front of my new temporary array, and return that array.
