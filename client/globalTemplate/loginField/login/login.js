Template.login.onRendered(function(){
	
});

Template.login.events({
	'submit #loginForm':function(e,t){
		e.preventDefault();
		var email = t.find("#loginEmail").value();
		var password = t.find("#loginPassword").value();

		Meteor.loginWithPassword(email,password);
		Accounts.onLogin(function(){
			Router.go('home');
		})
		

	},
});