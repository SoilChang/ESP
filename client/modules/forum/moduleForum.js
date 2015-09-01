Template.moduleForum.onRendered(function(){
	//initialise selection
	$('select').material_select();

	//initialise text count
	$('textarea#moduleForum_comments').characterCounter();


	// to validate comments
	inputValidation = function(object){
		var error = {};
	}

});

Template.moduleForum.events({
	"click #rateThisModule":function(){
		if(!Meteor.user()){
			alert("Please log in to rate");
			return;
		}
		var select = document.getElementById("moduleForum_select");
		var rating = parseInt(select.options[select.selectedIndex].value);
		var postId = this._id
		// if the user did not select anything
		if(rating === 0){
			return;
		}

		Meteor.call("rateThisModule", rating,postId);

	},
	"click #moduleForum_submitForm":function(){

		if(!Meteor.user()){
			alert("Please log in to comment");
			return;
		}
		
		var formData = {
			anonymity :$("#moduleForum_checkbox").is(":checked"),
			comments:$("#moduleForum_comments").val().trim().slice(0,1000),
			insertDate: new Date(),
			insertedBy: Meteor.userId(),
			facilitator: this.facilitator,
			under:this.code,
		}


		console.log(formData);
	}
});

