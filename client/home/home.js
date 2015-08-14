Template.home.onRendered(function(){
	// initialise slider
	$('.slider').slider({full_width: true},{Indicators:false});

	// initialise collapsible
	$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

	// switching tabs
    $("#home_firstButton").click(function(){
    	$("#home_firstTab").show();
    	$("#home_secondTab").hide();
    });
    $("#home_secondButton").click(function(){
    	$("#home_firstTab").hide();
    	$("#home_secondTab").show();
    });
});