// declaring variables
var age; 
var max_age; 
var drink;
var num_per_day;


document.getElementById('click_me').onclick = calculate;
// the function
function calculate() {
	// declaring the value of the variables (value makes sure just the value that the user inputs is grabbed)
	age = parseInt(document.getElementById('age').value);
	max_age = parseInt(document.getElementById('max_age').value);
	item = document.getElementById('item').value;
	num_per_day = parseInt(document.getElementById('num_per_day').value);
// this is the calculus of the solution
	var total_drinks = (max_age - age) * 365 * num_per_day;
// this makes the solution expressed
	document.getElementById('solution').innerHTML = total_drinks;
	// this makes the computer say what drink you input
	document.getElementById('drink').innerHTML = item;
}