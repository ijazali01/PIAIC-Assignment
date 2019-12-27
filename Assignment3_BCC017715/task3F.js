var input = prompt("Enter the color name");
var input1 = parseInt(prompt("Enter your desired position for update array"));
var colors = ["RED","GREEN","YELLOW"];
console.log(colors);
colors[0] = "RED"
colors[1] = "GREEN"
colors[2] = "YELLOW"
colors.splice(input1, 0 ,input );
console.log("User's color is " + input+"   &   "+ " User's Desired Position is "+ input1);
console.log(colors);

