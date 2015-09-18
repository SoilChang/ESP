Template.comments.helpers({
	checkIdentity:function(insertedBy,anonymity){
		if(anonymity){
			var currentUser = Meteor.user();
			if(!currentUser || currentUser.type != "undergraduate"){
				return "Anonymous";
			}else{
				return insertedBy;
			}
		}else{
			return insertedBy;
		}
		
	},
	numberOfLike:function() {
		var comment = ModuleComments.findOne(this._id);
		if(comment){
			return comment.like.length;
		}else{
			return 0;
		}
	},
	haveLiked:function(){
		var comment = ModuleComments.findOne(this._id);
		var currentUserId = Meteor.userId();
		if(comment){
			var you = _.indexOf(comment.like,currentUserId);
			if(you != -1){
				return "unlike";
			}else{
				return "like";
			}
		}else{
			return "like";
		} 
	}
});

Template.comments.events({
	"submit button":function(e){
		e.preventDefault();
		var currentUserId = Meteor.userId();
		if(!currentUserId){
			Materialize.toast("Please Login to like",2000);
		}
		var moduleCode = this.under;

		Meteor.call("likeComment",moduleCode)
	}
})