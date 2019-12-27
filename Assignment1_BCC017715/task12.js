var $ = 155;
var riyal = 41;
//we have 10$ and 25 riyals lets convert them into Pkr
var put$ = parseInt(prompt("Enter Dollor here"))
var putriyal = parseInt(prompt("Enter riyal here"))
var currencyExchange = $ * put$ + putriyal * 25;
alert("Here currency has been Exchanged in PKR "+currencyExchange);