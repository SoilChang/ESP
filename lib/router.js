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
	}
});

Router.route("/login",{
	name:"login",
	layoutTemplate:"layout",
	yieldRegions:{
		"login":{to:"body"}
	}
});

Router.route('/profile/:_id',{
	name:"profile",
	layoutTemplate:"profile",	
	yieldRegions:{
		"personalInfo":{to:"profile_center"}
	},
	data:function(){
		return [
			Meteor.users.find({_id:this.params._id}),
		]
	},
	waitOn:function(){
		return [
			Meteor.subscribe("currentUser"),
			Meteor.subscribe("allUserData")
		]
	},
	onBeforeAction:function(){
		this.next();	
	}
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
	waitOn:function(){
		return [
			Meteor.subscribe("currentUser"),
			Meteor.subscribe("allUserData")
		]
	},
	onBeforeAction:function(){
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
	waitOn:function(){
		return [
			Meteor.subscribe("currentUser"),
			Meteor.subscribe("allUserData")
		]
	},
	onBeforeAction:function(){
		

		this.next();
	}
});

