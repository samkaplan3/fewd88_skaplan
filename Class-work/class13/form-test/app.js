$(document).ready(function () {

$('#myForm').submit(function(){
	$('#name-input').val("");
	var name = $('#name-input').val();
	$('#target').text(name);
	console.log(event.type);
	event.preventdefault()
	$('#name-input').val("")
});



});
