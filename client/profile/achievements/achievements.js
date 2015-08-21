Template.achievements.helpers({
	loadUserData:function(){
		if(Meteor.user()){
			return Meteor.users.find({_id:Meteor.userId()});			
		}
	}
})