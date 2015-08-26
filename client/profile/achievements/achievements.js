Template.achievements.helpers({
	loadUserData:function(){
		if(Meteor.user()){
			return Meteor.users.find({_id:Meteor.userId()});			
		}
	}
});

Template.achievements.onRendered(function(){
	$('#achievements_rightbar').pushpin({top: 0 ,offset:300});
})