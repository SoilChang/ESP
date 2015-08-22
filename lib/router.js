Router.configure({
	loadingTemplate:"loading",
	notFoundTemplate:"notFound",
	data:function(){
		return [
			Meteor.users.findOne(Meteor.userId())
		]
	},
	waitOn:function(){
		return
		[
			Meteor.subscribe("currentUser"),
			Meteor.subscribe("allUserData"),
			Meteor.subscribe("eqpList")
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
	},
	data:function(){
		return Meteor.users.findOne(Meteor.userId());
	}
});

Router.route('/profile/:_id',{
	name:"profile",
	layoutTemplate:"profile",	
	yieldRegions:{
		"personalInfo":{to:"profile_center"}
	},
	data:function(){
		return Meteor.users.findOne(Meteor.userId());
	},
	// onBeforeAction:function(){
	// 	console.log(this.params._id);
	// 	this.next();
	// }
});
Router.route("/profile/:_id/achievements",{
	name:"profile_achievements",
	layoutTemplate:"profile",
	yieldRegions:{
		"achievements":{to:"profile_center"}
	},
	data:function(){
		return Meteor.users.findOne(this.params._id);
	},
	onBeforeAction:function(){
		
		requireLogin();
		this.next();
	}
});

Router.route("/profile/:_id/resume",{
	name:"profile_resume",
	layoutTemplate:"profile",
	yieldRegions:{
		"resume":{to:"profile_center"}
	},
	data:function(){
		return Meteor.users.findOne(this.params._id);
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
	}else{
		// this.next();
	} 
};