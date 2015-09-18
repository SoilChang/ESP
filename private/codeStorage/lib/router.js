Router.configure({
	loadingTemplate:"loading",
	notFoundTemplate:"notFound",
	waitOn:function(){
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
	waitOn:function(){
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

Router.route("/esplion",{
	name:"espLion",
	layoutTemplate:"layout",
	yieldRegions:{
		"espLion":{to:"body"}
	}
});

Router.route("/leaderboard",{
	name: "leaderBoard",
	layoutTemplate:"layout",
	yieldRegions:{
		"leaderBoard": {to: "body"}
	}
});


