    // declare variables//
    
    var win= 0;
 	var losses= 0;
 	var total= 0;
 	var Random= 0;
 	var crystal1= 0;
 	var crystal2= 0;
 	var crystal3= 0;
     var crystal4= 0;
     //start game - event click for each crystal//
	$( document ).ready(function(){
 	init();
 	$('#crystal1').on ('click', function(){
		total= total + crystal1;
		$("#total").html("<p>Your Total Score: "+ total+"</p>");
		checkTotal();
		
		
	});	
	$('#crystal2').on ('click', function(){
		total= total + crystal2;
		$("#total").html("<p>Your Total Score: "+ total+"</p>");
		checkTotal();
		
		
	});	
	$('#crystal3').on ('click', function(){
		total= total + crystal3;
		$("#total").html("<p>Your Total Score: "+ total+"</p>");
		checkTotal();
		
		
	});	
	$('#crystal4').on ('click', function(){
		total= total + crystal4;
		$("#total").html("<p>Your Total Score: "+ total+"</p>");
		checkTotal();
	
		
    });	
    //random number generate for number to match//
	function init() {
  	Random=Math.floor(Math.random()*(101)+19);
  	$("#random").html("<p>Number to Match: "+ Random+"</p>");
  	total= 0;
  	$("#total").html("<p>Your Total Score: "+ total+"</p>");
 //random number generate for each crystal//
 	crystal1= Math.floor(Math.random()*(11)+1);
 	crystal2= Math.floor(Math.random()*(11)+1);
 	crystal3= Math.floor(Math.random()*(11)+1);
 	crystal4= Math.floor(Math.random()*(11)+1);
 	}
 	
 	function checkTotal() {
 		
 		if(total >Random){
 			losses++
 		$("#losses").html("<p>Losses: "+ losses+"</p>");	
		alert("You Lose");
		init();
		
	}
 		if(total ===Random){
 			win++
 		$("#wins").html("<p>Wins: "+ win+"</p>");	
		alert("You win");
		init();
	
		
 	}
 	}
});
