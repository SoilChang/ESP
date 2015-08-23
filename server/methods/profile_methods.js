Meteor.methods({
	"updateResume":function(update){
		check(update, Object);

		var currentUserId = Meteor.userId();


		if(_.has(update, "education") ){
			Meteor.users.update({_id: currentUserId},{$set:{education:update.education}});
		}
		if(_.has(update, "workExperience")){
			Meteor.users.update({_id: currentUserId},{$set:{workExperience:update.workExperience}});
		}
		if(_.has(update,"technicalSkills") ){
			Meteor.users.update({_id: currentUserId},{$set:{technicalSkills:update.technicalSkills}});
		}
		if(_.has(update,"cca") ){
			Meteor.users.update({_id: currentUserId},{$set:{cca:update.cca}});
		}
	},

	'updateContact':function(update){
		check(update, Object);

		var currentUserId = Meteor.userId();

		if(_.has(update, "handphone") ){
			Meteor.users.update({_id: currentUserId},{$set:{handphone:update.handphone}});
		}
	}
});