Template.login.onRendered(function(){
	
});

Template.login.events({
	'submit #loginForm':function(e,template){
		e.preventDefault();
		var email = $('[name=loginEmail]').val();
		var password = $('[name=loginPassword]').val();

		Meteor.loginWithPassword(email,password);
		Accounts.onLogin(function(){
			Router.go('home');
		})
		

	},
});