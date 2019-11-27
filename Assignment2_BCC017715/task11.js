var time = parseInt(prompt("Enter time in 24 hours to convert into 12 hours"));
var time2 = time/100;
var time3 =time2-12;
var time4 = time+1200;
if (time2 =>12 && time2 <= 24){
    alert(time3+"  pm")
}else if (time2<12 && time2 >0){
alert(time4+"  am");
}