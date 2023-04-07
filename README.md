# odin-RPS
basic rps game

1. Basic outline of what i think at first using comments
2. Finished template function of getComputerChoice()
3. Finished template function of playRound()
4. game() kind of completed
5. **console.log(game()) used 5 times to simulate 5 rounds
6. Realised that i am using the same result which is wrong
7. Asked chatgpt and it moved my line 42-44 to game()
8. I keep forgetting that a function without a loop only does the thing 1 time

//rps-ui branch
1. Removed game() function
2. Added 3 buttons for rock paper and scissors
3. Added addEventListener for each button
4. Create elements p for each event and append result
5. Initialize playerScore and computerScore
6. Create new p element with id scoreDisplay under buttons
7. Create totalScore() to keep track of score and display score
8. if player or computer is not at 5 wins, add score till 5
9. Once score is at 5, stop the count
10. When game is played, print current score of each
11. When one is at 5 wins, print who wins and stop game
12. Create newGame button above rock paper and scissors
13. Create newGame()
14. Initialize playerScore and computerScore to 0 on click
15. remove all messages and reset score to 0
16. Added hidden attribute to rock, paper and scissors buttons
17. Before newGame is pressed, hide the buttons
18. After newGame is clicked, reveal buttons
19. When score is at 5, hide buttons to stop game
20. Added initial instructions to scoreDisplay element
21. Added gameResult element inside the win condition to place win message below score