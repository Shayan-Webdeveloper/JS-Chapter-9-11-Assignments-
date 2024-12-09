var game = "2"
var player = prompt("Enter a number between 1 to 10")
if(player == game){
     document.write("<div>Bingo! Correct answer.</div>")
}
else if(++game == player){
     document.write("<div>Close enough to the correct answer</div>")
}
else{
     document.write("<div>Your answer is wrong</div>")
}