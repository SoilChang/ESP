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
	"postComments":function(formData,under){
		check(formData,Object);
		check(under, String);
		ModuleInfo.update({code:under},{$push:{comments:formData}});

	}
});