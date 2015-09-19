Router.configure({
	loadingTemplate:"loading",
	notFoundTemplate:"notFound",
	waitOn:function(){
		return [
			Meteor.subscribe("activityCollection"),
			Meteor.subscribe("moduleInfo"),
		]
	}
});

Router.route("/",{
	name:"newsfeed",
	layoutTemplate:"layout",
	yieldRegions:{
		"newsfeed":{to:"body"}
	},
});

Router.route("/ESPLions",{
	name:"ESPLions",
	layoutTemplate:"layout",
	yieldRegions:{
		"ESPLions":{to:"body"}
	},
});

Router.route("/Subclub",{
	name:"Subclub",
	layoutTemplate:"layout",
	yieldRegions:{
		"Subclub":{to: "body"}
	},
});

Router.route("/Game",{
	name:"Game",
	layoutTemplate:"layout",
	yieldRegions:{
		"Game":{to: "body"}
	},
});

Router.route("/Forum",{
	name:"Forum",
	layoutTemplate:"layout",
	yieldRegions:{
		"Forum":{to: "body"}
	},
});