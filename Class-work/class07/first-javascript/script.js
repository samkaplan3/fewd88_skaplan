alert("Sam"); 
var num1 = ('<h2>writing to the document, like a boss</h2>');
var num2 = (10 * 10);
var num3 = (100/10);
var num4 = (50-17);
var num5 = (50+17);
var fnamelname = ("Samson " + "Kaplan");

document.write(num2 + num3)

// function definition
function doSomething (){
	alert("Sam")
}
doSomething();

document.getElementById('greeting') .style.color = "red";
document.getElementById('chad') .style.color = "green";

var chad = document.getElementById('chad')
chad.onclick = doSomething;