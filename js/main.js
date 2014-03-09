$(document).ready(function() {
	$.fn.fullpage({
		slidesColor: ['#f0f0f0', '#f0f0f0', '#f0f0f0', '#403C3D'],
		anchors: ['home', 'skill', 'work', 'contact'],
		menu: '#menu'
	});

	$("#section1 .bottom div").click(function(event) {
		$.fn.fullpage.moveTo(3); 
	});

	$("#navHome").click(function(event) {
		$.fn.fullpage.moveTo(1); 
	});

	$("#navWork").click(function(event) {
		$.fn.fullpage.moveTo(2); 
	});

	$("#navAbout").click(function(event) {
		$.fn.fullpage.moveTo(3); 
	});

	$("#navContact").click(function(event) {
		$.fn.fullpage.moveTo(4); 
	});


});

