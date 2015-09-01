Template.home.onRendered(function(){
	// initialise slider
	$('.slider').slider({full_width: true},{Indicators:false});

	// initialise collapsible
	$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

    // drop down initialisation
    $('.dropdown-button').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrain_width: false, // Does not change width of dropdown to that of the activator
          hover: false, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: true // Displays dropdown below the button
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

    // initialise tabs
    $('ul.tabs').tabs();

    // set display function
    setDisplay = function(option){
        console.log("setDisplay called" + option);
        if(option === "card"){
            Session.set("home_firstTab_display", true);
            return;
        }
        if(option === "list"){
            Session.set("home_firstTab_display", false);
            return;
        }
    };
});


Template.home.helpers({
    // this is to display which type of display is currently on
    displayType:function(){
        var cardViewTrue = Session.get("home_firstTab_display");
        if(cardViewTrue){
            return "Card"
        }else{
            return "List"
        }
    }
});