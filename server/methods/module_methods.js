Meteor.methods({
	"rateThisModule":function(rating,postId){
		check(rating, Number);
		check(postId, String);

		var currentUserId = Meteor.user();
		var currentVoter = _.keys(ModuleInfo.findOne(postId).voters);

		// console.log(currentVoter);
		// if(_.indexOf(currentVoter,currentUserId) < 0 ){
		// 	var pair = [currentUserId, rating];
		// 	ModuleInfo.update({_id: postId},{$addToSet: {voters: pair }});
		// }else{
		// 	var pair
		// }

		// ModuleInfo.update({_id: postId},{$inc: {numberOfvotes: 1}});
		// ModuleInfo.update({_id: postId},{$inc: {totalRating: rating}});
		

	}
})