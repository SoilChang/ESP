Meteor.methods({
	"rateThisModule":function(score,postId){
		check(score, Number);
		check(postId, String);

		var currentUserId = Meteor.userId();

		var voterList = ModuleInfo.findOne(postId).voters;
		console.log("voterList: "+ voterList.toString());
		var index = _.indexOf(voterList,currentUserId);
		console.log("index: "+ index.toString());
		if(index < 0){
			// push these data to the end of the array
			ModuleInfo.update({_id:postId},{$push:{voters: currentUserId}});
			ModuleInfo.update({_id:postId},{$push:{rating: score}});
			console.log("pushing finished");
		}else{
			// set the corresponding rating array to the value
			var ratingList = ModuleInfo.findOne({_id:postId}).rating;
			console.log("ratingList:"+ ratingList.toString());
			ratingList[index] = score;

			ModuleInfo.update({_id:postId},{$set:{rating:ratingList}});

			console.log(ModuleInfo.findOne(postId).rating.toString());
		}
	},
	"postComments":function(formData){
		check(formData,Object);
		
		ModuleComments.insert(formData);

	},
	"likeComment":function(moduleCode, _id){
		check(moduleCode, String);
		check(_id, String);

		var currentUserId = Meteor.userId();
		var likers = ModuleComments.findOne({_id:_id}).like;
		if(_.indexOf(likers,currentUserId) >= 0){
			// if can find, remove pull the user out from the set
			var newList = _.without(likers,currentUserId );
			ModuleComments.update({_id: _id},{$set:{like: newList}});
			// ModuleComments.update({under:moduleCode},{$pull:{like:{$elemMatch:{currentUserId}}}});

		}else{
			// if can't find, insert the user
			ModuleComments.update({_id: _id},{$addToSet:{like:currentUserId}});
		}
	}
});