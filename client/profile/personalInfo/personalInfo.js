Template.personalInfo.onRendered(function(){
	// initiate spyscroll
	$('.scrollspy').scrollSpy();
});


Template.personalInfo.helpers({
	loadUserData:function(){
		if(Meteor.user()!=null && Meteor.loggingIn()!=true){
			return Meteor.user();
		}
	},
});