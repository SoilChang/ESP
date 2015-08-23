Template.personalInfo.onRendered(function(){
	// initiate spyscroll
	$('.scrollspy').scrollSpy();

	// offset fixed right bar
	$('#personalInfo_rightBar').pushpin({ top: "200px" });
});


Template.personalInfo.helpers({
	loadUserData:function(){
		if(Meteor.user()!=null && Meteor.loggingIn()!=true){
			return Meteor.user();
		}
	},
});

Template.personalInfo.events({
	'submit form':function(e,t){
		e.preventDefault();

		// collect all the data into an object
		var update = {
			handphone: $(e.target).find('[name=handPhone_form]').val(),	
		}

		// remove unfilled keys
		if( !update.handphone.trim() ){
			update = _.omit(update,"handphone")
		}	
	
		Meteor.call("updateContact", update);

	},
})