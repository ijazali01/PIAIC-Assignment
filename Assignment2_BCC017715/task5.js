var a = 7;
var b = parseInt(prompt("Guess the correct answer between 1 to 10"));
if( b==a){
    alert("Bingo! Correct answer");
} else if(b==++a){
    alert("Close enough to the correct answer");
}
else{
    alert("Try Again");
}