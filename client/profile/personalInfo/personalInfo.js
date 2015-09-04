Template.personalInfo.onRendered(function(){
	// initiate spyscroll
	$('.scrollspy').scrollSpy();

	// offset fixed right bar
	$('#personalInfo_rightBar').pushpin({top: 0 ,offset:300});
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
			handphone: $("#handPhone_form").val().trim(),	
			secondaryEmail: $("#secondaryEmail_form").val().trim(),
		}
		console.log(update.secondaryEmail);
		// remove unfilled keys
		if( !update.handphone ){
			update = _.omit(update,"handphone");
		}else if(!update.secondaryEmail){
			update = _.omit(update,"secondaryEmail");
		}
	
		Meteor.call("updateContact", update);
		Materialize.toast("Submitted!",2000);
	},
})