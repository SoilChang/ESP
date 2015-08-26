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
	},
	data:function() {
		return Meteor.subscribe("activityCollection");
	}
});

Router.route("/login",{
	name:"login",
	layoutTemplate:"layout",
	yieldRegions:{
		"login":{to:"body"}
	}
});

