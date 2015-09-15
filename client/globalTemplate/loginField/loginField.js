Template.loginField.onRendered(function(){
	// if the user is auto logged in, call this method
	Meteor.startup(function(){
		if(Meteor.user()){
			console.log("user auto log in, auto updated");
			Meteor.call("updateLastLogin");
		}
	});

	// if the user click to log in
	Accounts.onLogin(function(){
		console.log("user click to log in,updated");
		Meteor.call("updateLastLogin");
	})
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