Template.personalInfo.helpers({
	loadUserData:function(){
		if(Meteor.user()!=null && Meteor.loggingIn()!=true){
			return Meteor.users.find({_id:Meteor.userId()});
		}
	},
});

Template.personalInfo.onRendered(function(){
	// initiate spyscroll
	$('.scrollspy').scrollSpy();
})