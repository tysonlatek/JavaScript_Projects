// The JavaScript switch statement is a type of conditional statement that performs different actions based on the conditions presented to it
function Pet() {
    var Pet_Output;
    var Pets = document.getElementById("Pet_Input").value;
    var Pet_String = "s are a great choice!";
    switch(Pets) {
        case "Cat":
            Pet_Output = "Cat" + Pet_String;
        break;
        case "Dog":
            Pet_Output = "Dog" + Pet_String;
        break;
        case "Turtle":
            Pet_Output = "Turtle" + Pet_String;
        break;
        case "Bird":
            Pet_Output = "Bird" + Pet_String;
        break;
        default:
        Pet_Output = "Please enter a pet exactly as above."
    }
    document.getElementById("Pet_Output").innerHTML = Pet_Output;
}
// The getElementByClassName() method is used to affect multiple elements that share the same class
function Click() {
    var i = document.getElementsByClassName("Click");
    i[1].innerHTML = "Bye! See you later!";
}
// JavaScript code used to draw a line in the HTML canvas element
var c = document.getElementById("Canvas");
var context = c.getContext("2d");
context.moveTo(30, 170);
context.lineTo(270, 30);
context.stroke();

// JavaScript code used to draw a cirle in the canvas element
var c = document.getElementById("Canvas");
var context = c.getContext("2d");
context.beginPath();
context.arc(150, 100, 50, 50, 0, 2 * Math.PI);
context.stroke();

// JavaScript code used to create a linear gradient in the canvas element
var c = document.getElementById("Canvas2");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 250, 150);