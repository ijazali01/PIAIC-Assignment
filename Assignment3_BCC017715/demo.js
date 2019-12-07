var num = [23,42,13,34,55,65,45,67,85,58,99,90];
var  input = parseInt(prompt("Please Enter your number here"));
console.log("User input = "+input);
for (var i = 0 ; i < num.length ; i++){
    
    if (num[i] === input){
        console.log("Found "+input+" on index "+i);
    }
else {
    console.log("Not found");
    break;
}
}