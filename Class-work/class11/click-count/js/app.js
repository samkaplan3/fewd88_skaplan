// Program Flow
//
// 1: User clicks on #clickme (this element)
// 2: Increment the value of #click-num by one for each click (eg if clicknum is 0, make it 1; it clicknum is 10, make it 11; etc.)
// 3: If the number of clicks == 5, change the background-color of <body> to red
// 4: Else if the number of clicks == 10, change the background-color of <body> to green
// 5: Else if the number of clicks == 15, change the background-color of <body> to blue
// 6: Else, change the background-color of <body> to black

$(document).ready(function () {

var clicks = 0;

$('#clickme').click(function(){
clicks += 1;
console.log(clicks)
if (clicks ==15) {
$('body').css('background-color', 'blue');
} else if (clicks >= 10) {
$('body').css('background-color', 'green');
} else if (clicks >= 5) {
$('body').css('background-color', 'red');
} else {
$('body').css('background-color', 'black');
}


});
});