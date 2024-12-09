document.write('<h1>Marks Sheet</h1><br>');
document.write('<h2>Total Marks : 700</h2>');
var Subject1 = +prompt("Enter Marks of Math");
var Subject2 = +prompt("Enter Marks of Pak. Studies");
var Subject3 = +prompt("Enter Marks of Physics");
var Subject4 = +prompt("Enter Marks of English");
var Subject5 = +prompt("Enter Marks of Computer");
var Subject6 = +prompt("Enter Marks of Sindhi");
var Subject7 = +prompt("Enter Marks of Chemistry");
var ObtainedMarks = Subject1 + Subject2 + Subject3 + Subject4 + Subject5 + Subject6 + Subject7;
var TotalMarks = "700"
document.write('<h2>' + "Marks Obtained : " + ObtainedMarks + '</h2>');
var Percentage = ObtainedMarks/TotalMarks*100
document.write("<h2>" + "Percentage : " + Percentage + "%" + "</h2>")
if(Percentage>=80){
     document.write("<h2>Grade : A-one</h2>")
     document.write("<h2>Remarks : Excellent</h2>")
}
else if(Percentage>=70){
     document.write("<h2>Grade : A</h2>")
     document.write("<h2>Remarks : Good</h2>")
}
else if(Percentage>=60){
     document.write("<h2>Grade : B</h2>")
     document.write("<h2>Remarks : You need to improve</h2>")
}
else if(Percentage<=60){
     document.write("<h2>Grade : Fail</h2>")
     document.write("<h2>Remarks : Sorry</h2>")
}
else{
     document.write("<h2>Grade : Fail</h2>")
     document.write("<h2>Remarks : Sorry</h2>")
}