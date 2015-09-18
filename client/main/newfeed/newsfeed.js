Template.newsfeed.onRendered(function(){
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
          constrain_width: true, // Does not change width of dropdown to that of the activator
          hover: false, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: true // Displays dropdown below the button
    });

    // initialise tabs
    $('ul.tabs').tabs();

    // set display function
    setDisplay = function(option){
        if(option === "card"){
            Session.set("newsfeed_display", true);
            return;
        }
        if(option === "list"){
            Session.set("newsfeed_display", false);
            return;
        }
    };

    setSortOrder = function(option){
        Session.set("newsfeed_sortOrder", option);
        return;
    }
});

Template.newsfeed.helpers({
	// this is to display which type of display is currently on
	displayType:function(){
	    var cardViewTrue = Session.get("newsfeed_display");
	    if(cardViewTrue){
	        return "Card"
	    }else{
	        return "List"
	    }
	},

	displaySort: function(){
	    var displaySort = Session.get("newsfeed_sortOrder");

	    switch(displaySort){
	        case "talk": return "Talks";
	        case "date": return "Date";
	        case "competition": return "Competitions";
	        case "event": return "Events";
	    }
	}
});