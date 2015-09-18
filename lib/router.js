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
	name:"home",
	layoutTemplate:"layout",
	yieldRegions:{
		"newsfeed":{to:"body"}
	},
});