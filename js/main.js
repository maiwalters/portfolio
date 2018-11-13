var logofunc= function() {
   $( "#logo" ).delay(1000).animate({marginRight: "75px"},
   	800,
    	);
   };

var dividerfunc= function() {
	$("#divider").delay(1800).animate({height:"175px"});
	 };

var h1func= function() {
	$("#Hh1").delay(3000).animate({
		opacity:"1.0",
		paddingTop:"0%"
		},700);
	 };

var h2func= function() {
	$("#Hh2").delay(3900).animate({
		opacity:"1.0",
		paddingTop:"0%"
		},700);
	 };

var navfunc= function() {
	$(".nav").delay(4700).animate({
		opacity:"1.0"		
		},700);
	 };



$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

function openNav() {
    document.getElementById("myNav").style.height = "100%";
    var title=document.getElementsByClassName("porth1");
    for(i=0; i<title.length; i++) {
    title[i].style.opacity =0;
   }
   var list=document.getElementsByClassName("portlist");
    for(i=0; i<list.length; i++) {
    list[i].style.opacity =0;
   }

}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    var title=document.getElementsByClassName("porth1");
    for(i=0; i<title.length; i++) {
    title[i].style.opacity =1;
    }
    var list=document.getElementsByClassName("portlist");
    for(i=0; i<list.length; i++) {
    list[i].style.opacity =1;
   }
}



if (window.matchMedia("(max-width: 530px)").matches) {
	var logofunc= function(){
		$("#logo").animate({marginRight: "0px"},
    	);
    };
    var dividerfunc= function() {
	$("#divider").animate({height:"175px"});
	 };
	var h1func= function() {
	$("#Hh1").delay(1000).animate({
		opacity:"1.0",
		paddingTop:"0%"
		});
	 };
	var h2func= function() {
	$("#Hh2").delay(1500).animate({
		opacity:"1.0",
		paddingTop:"0%"
		});
	 };
	var navfunc= function() {
	$(".nav").animate({
		opacity:"1.0"		
		});
	 };
	
} else {

}

$( document ).ready(logofunc);
$( document ).ready(dividerfunc);
$( document ).ready(h1func);
$( document ).ready(h2func);
$( document ).ready(navfunc);


$(window).scroll(function(){
	if($(this).scrollTop()>0) {
       $(".aboutme").addClass("visible");
       } 
  	else {
    	$(".aboutme").removeClass("visible"); 
    	    
    }
});