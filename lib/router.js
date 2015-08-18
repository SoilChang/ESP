Router.configure({
	loadingTemplate:"loading",
	notFoundTemplate:"notFound",
	data:function(){
		return [
			Meteor.subscribe("currentUser"),
			Meteor.subscribe("allUserData")
		]
	}
});

Router.route("/",{
	name:"home",
	layoutTemplate:"layout",
	yieldRegions:{
		"home":{to:"body"}
	}
});

Router.route("/login",{
	name:"login",
	layoutTemplate:"layout",
	yieldRegions:{
		"login":{to:"body"}
	}
});

Router.route("/profile",{
	name:"profile",
	layoutTemplate:"profile",
	yieldRegions:{
		"personalInfo":{to:"profile_center"}
	},
	onBeforeAction:function(){
		requireLogin();
		this.next();
	}
});

requireLogin = function(){
	if (! Meteor.user()) {
	    if (Meteor.loggingIn()) {
		    this.render(this.loadingTemplate);
		} else {
	    	this.render('accessDenied');
		}
	} 
};