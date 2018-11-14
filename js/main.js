$( document ).ready(function() {
   $( "#logo" ).delay(1000).animate({marginRight: "75px"},
   	800,
    	);
   });

$( document ).ready(function() {
	$("#divider").delay(1800).animate({height:"175px"});
	 });

$( document ).ready(function() {
	$("#Hh1").delay(3000).animate({
		opacity:"1.0",
		paddingTop:"0%"
		},700);
	 });

$( document ).ready(function() {
	$("#Hh2").delay(3900).animate({
		opacity:"1.0",
		paddingTop:"0%"
		},700);
	 });

$( document ).ready(function() {
	$(".nav").delay(4700).animate({
		opacity:"1.0"		
		},700);
	 });

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

document.addEventListener('aos:out', ({ detail }) => {
  console.log('animated out', detail);
});

