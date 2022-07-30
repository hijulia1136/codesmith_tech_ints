Date and time:

- INTERVIEWEE'S NAME: Jordy Gonzalez
- INTERVIEWEE'S EMAIL:joao.gonza@gmail.com
- PREFERRED COHORT: FTRI
- ONLINE OR IN PERSON:
- INTERVIEW NUMBER:2nd
  -Overall score:7/9/5/7/5

# Technical Interview Notes:

Level 4 challenge
Problem: SubsetSum
Timer: 55 mins

+read prompt aloud
+read through examples so he could better understand problem
+thinks this is a very complicated problem
+high level strategy recognizes permutations
+we talked through his approach which is to create all potential sum combinations; asked about an array with 1million elements and he recognizes the need to use recursion to set a base case to evaluate and kick out of the call stack when it hits the result
+pseudo code with excellent technical communication
+excellent logic with his approach+
+good technical communication talking through his conditionals
+using a for loop with a recursive call holding another part of the array - 2 pointers
+says this is tough and asks to talk it through with me
-defines additional variables to store sums; wants to use slice method to create different permutations of array
+wants to use includes method to check new array that is storing all the sums to find target
-incorrect use of slice but was able to explain that he wasn't certain if it would work; encouraged him to look up splice vs slice; he understood documentation on mdn and decided to use splice
+for of loop with recursive call
+excellent technical communication and is maintaining logic
+is using reduce to take all spliced arrays and compares that to target number
+looks up reduce method quickly to ensure he understands how to pass in previous and current
+uses arrow function for reduce method
+chain method to push reduce value into storage array
+receives error that he cannot recursive call a function within a for of loop; asks to think
+asks to start writing down on piece of paper in front of him to visualize
+recognizes the his for of loop is not correct and cannot use with invocation of function
+comments out and wants to confirm that this splice method is working correctly
+re-reads his splice method to confirm with documentation that it is correct; continues to bring up that he knows how to manipulate a string but not an array with splice and slice
+recognizes he is not getting all elements to remain in his new array variable
+continues to read splice method documentation; says he doesn't know how to ge thte right range
+asks to change up his strategy
+gets the correct console.log with new strategy that is correctly moving past the pass by reference issue he was facing
+reduce syntax look up of documentation
+proceeds to console.log
--did not listen to instruction but later apologized and said he is thinking hard
--got quiet while refactoring reduce; assigns it to a new method
++says he cannot see what he is doing wrong with his reduce; is looking up documentation but not communicating; brings in reduce function example to test with code block with explanation
+uses console.log to see what's happening in code block
+includes method
-did not listen to my suggestion; when I asked if I could add some code he said yes but promptly erased it; clearly frustrated and not communicating when prompted. I asked what he was thinking of and he proceeded to start coding without responding to me. I let him code on his own for 2 mins until the timer ran out.
-I told him we were at time and he said 'ok, well, I can't solve this anyway'.
+I then asked if I could should him another approach and he agreed, but as I began pseudo coding out a new solution he was no longer on camera. I asked where he was and he said, 'sorry I need a break.' I explained it is OK to get frustrated but important to stay positive. I complimented parts of his logic and encouraged him to continue pushing toward his solution.
+I then directed him back to my psuedo code approach and I asked him what he thought about subtracting an element from the target and then proceeding in a recursive call - he said he would try it and he found it interesting.

+friendly at first but admits being nervous;
-While wrapping up, I asked if he had any questions and he asked me how I would compare myself to him and his knowledge at this time. I told him I wasn't going to compare myself (and explained that Codesmith is non-competitive and discourages comparisons to create a safe culture) but that I would explain how I progressed during the program and he said 'that's OK, I guess'. ---I don't know what to make of this exchange but one of two things popped into my head: 1) he was frustrated with not solving the algo and wasn't aware of himself or how he was coming across, and/or 2) he was bothered that I was making suggestions and asking about his logic (only at times he stopped communicating) during his attempts to solve the challenge and because he didn't take any of my suggestions (such as considering using a forEach instead of a for of loop when he was experiencing the 'not iterable error above'), as well as erasing my code, that he presumed I was lacking knowledge and being distracting. In my estimation, and certainly after he erased my code (see above), Jordy would be a bulldozer and possibly not friendly to lessor knowledgeable individuals and/or women. I think if the plan was to start him at a level 4 to see how he handles blocks I summarize with: he is OK with difficult challenges that he doesn't have a clear approach to at first, but the longer the solution evades him the more frustrated he will get and the more that will show. All-in-all, I recommend more than one pair programming session and especially in a scenario where the navigator is less knowledgeable than him (meaning have it be a problem that is below his level but still has to take instruction from the navigator) and then evaluate his attitude. I don't know what else to make of it -- the whole thing was quite a stunning turn of events from pleasant and friendly to frustrated and disrespectful.

+Discussion with Elizabeth:
-2 issues:
1: process: when I searched for his name in slack I found an entry for his past interview to be accepted and another for starting him a level 4 but without context. He had no knowledge of being accepted (and pressed me about this at the end), and he had no knowledge of the interview being PP style.
2: attitude: I will let you read my notes about it overall, but if this was meant to be a PP session, it wasn't. If this interview was meant to be about seeing him run into blocks it did and it was not flattering for him.
