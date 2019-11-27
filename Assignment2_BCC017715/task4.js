var totalMarks = 300;
var num1 = parseInt(prompt("Obtained Marks"));
var num2 = parseInt(prompt("Obtained Marks"));
var num3 = parseInt(prompt("Obtained Marks"));
var obtainedMarks = (num1 + num2 + num3);
var marks_percentage = (obtainedMarks/totalMarks*100);
if(marks_percentage > 80 && marks_percentage <= 100){
    console.log("Total Marks: "+ totalMarks);
    console.log("Obtained: " + obtainedMarks);
    console.log("Percentage: " + marks_percentage+"%");
    console.log("Grade:  A one");
    console.log("Remarks: Excelent");
} else if(marks_percentage > 70 && marks_percentage <= 80){
    console.log("Total Marks: "+ totalMarks);
    console.log("Obtained: " + obtainedMarks);
    console.log("Percentage: " + marks_percentage+"%");
    console.log("Grade: A");
    console.log("Remarks: Good");
} else if(marks_percentage > 60 && marks_percentage <= 70){
    console.log("Total Marks: "+ totalMarks);
    console.log("Obtained: " + obtainedMarks);
    console.log("Percentage: " + marks_percentage+"%");
    console.log("Grade:  B");
    console.log("Remarks: You need to improve");
}else  {
    console.log("Total Marks: "+ totalMarks);
    console.log("Obtained: " + obtainedMarks);
    console.log("Percentage: " + marks_percentage+"%");
    console.log("Grade:  Fail");
    console.log("Remarks: Sorry");
}