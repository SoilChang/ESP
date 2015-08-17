Router.configure({
	loadingTemplate:"loading",
	notFoundTemplate:"notFound",
	data:function(){
		return [
			Meteor.subscribe("allUsers")
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
})