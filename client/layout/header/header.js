Template.header.onRendered(function(){
	// initiate header
	$(".button-collapse").sideNav();

	// enable dropdown
	$('#dropdown_button_1').dropdown({
	      inDuration: 300,
	      outDuration: 225,
	      constrain_width: false, // Does not change width of dropdown to that of the activator
	      hover: true, // Activate on hover
	      gutter: 0, // Spacing from edge
	      belowOrigin: true // Displays dropdown below the button
	});
});

Template.header.helpers({
	// to render data context for the dynamic route
	loadLink:function(){
		return Meteor.user();		
	}
})