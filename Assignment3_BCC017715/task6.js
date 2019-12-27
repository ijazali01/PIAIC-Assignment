var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"]; 
var o = ["th","st","nd","rd"]; 
var input = parseInt(prompt("Enter Your Choice"));
if (input === 1){
console.log(aCities[0],"is 1",o[1],"Choice");
}
else if (input === 2){
    console.log(aCities[1],"is 2",o[2],"Choice");
}
else if (input === 3){
    console.log(aCities[2],"is 3",o[3],"Choice");
}
else{
    console.log("Record Not Found");
}