Template.loginField.onRendered(function(){

});

Template.loginField.helpers({
	loadUsername:function(){
		var id = Meteor.userId()
		return Meteor.users.findOne({_id : id}).username;
	}
});

Template.loginField.events({
	"click #logoutButton":function(){
		Meteor.logout();		
	}
})