var number1 = +prompt("Enter the 1st number")
var number2 = +prompt("Enter the 2nd number")
var operation = prompt("Enter the operation (+, -, *, /, %)")
var addition = number1 + number2
var subtraction = number1 - number2
var multiplication = number1 * number2
var division = number1 / number2
var remainder = number1 % number2
if(operation == "+"){
     document.write("<h1>" + "The addition of number 1 & number 2 is :" + addition + "</h1>")
}
else if(operation == "-"){
     document.write("<h1>" + "The subtraction of number 1 & number 2 is :" + subtraction + "</h1>")
}
else if(operation == "*"){
     document.write("<h1>" + "The multiplication of number 1 & number 2 is :" + multiplication + "</h1>")
}
else if(operation == "/"){
     document.write("<h1>" + "The dividion of number 1 & number 2 is :" + division + "</h1>")
}
else if(operation == "%"){
     document.write("<h1>" + "The remainder of number 1 & number 2 is :" + remainder + "</h1>")
}
else{
     document.write("<h1>Please check your numbers & operations.</h1>")
}