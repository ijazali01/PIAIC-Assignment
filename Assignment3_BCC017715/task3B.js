var a = prompt("Enter Your color for update the array");
var colors = ["RED","GREEN","YELLOW"];
colors[0] = "RED"
colors[1] = "GREEN"
colors[2] = "YELLOW"
console.log(colors);
colors.shift(a);
console.log(a + colors);
