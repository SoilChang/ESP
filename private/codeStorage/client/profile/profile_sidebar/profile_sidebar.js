Template.profile_sidebar.helpers({
	loadUserData:function(){
		return Meteor.users.find({_id:Meteor.userId()});
	}
});

Template.profile_sidebar.onRendered(function(){
	// style the first tab
	$("#profile_personalInfo").hover(function(){
		$("#profile_personalInfo").css({"color":"red", "font-size":"20px"});
	},function(){
		$("#profile_personalInfo").css({"color":"black", "font-size":"medium"})
	});

	// style the second tab
	$("#profile_achievements").hover(function(){
		$("#profile_achievements").css({"color":"red", "font-size":"20px"});
	},function(){
		$("#profile_achievements").css({"color":"black", "font-size":"medium"})
	});

	// style the 3rd tab
	$("#profile_resume").hover(function(){
		$("#profile_resume").css({"color":"red", "font-size":"20px"});
	},function(){
		$("#profile_resume").css({"color":"black", "font-size":"medium"})
	});

	//style the 4th tab
	$("#profile_message").hover(function(){
		$("#profile_message").css({"color":"red", "font-size":"20px"});
	},function(){
		$("#profile_message").css({"color":"black", "font-size":"medium"})
	});
 
	
});

Template.profile_sidebar.events({
});