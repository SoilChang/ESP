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

Template.moduleForum.helpers({
	haveRated:function(){

		// check if user has logged in
		var currentUserId = Meteor.userId();
		if(!currentUserId){
			return "Log In to rate";
		}

		var currentVoters = ModuleInfo.findOne(this._id);
	
		if(!currentVoters){
			// to check if data retrieval is successful
			return;
		}

		// if the user has not voted
		var index = _.indexOf(currentVoters.voters, currentUserId)
		if( index < 0){
			return "rate this module";
		}

		// if the user has voted
		var yourRating = ModuleInfo.findOne(this._id).rating[index];
		if(!yourRating){
			// to check if data retrieval is successful
			return;
		}
		return "change your rating: "+  yourRating.toString();
	},

	computeAverage:function(){
		var people = ModuleInfo.findOne(this._id);

		if(!people){
			return "undertermined"
		}
		
		var numberOfPeople = people.voters.length;
		if(numberOfPeople === 0 ){
			return "undertermined"
		}

		var ratings = ModuleInfo.findOne(this._id).rating;
		var len = ratings.length;
		var total = 0;
		for(var i=0; i<len;i++){
			total += ratings[i];
		}

		return Math.ceil(total/numberOfPeople);
	},

	numberOfVoter:function(){
		var list = ModuleInfo.findOne(this._id);
		if(!list){
			return 0;
		}
		
		return list.voters.length;
	},
	commentRoll:function(){
		var allComments = ModuleComments.find({under:this.code},{sort:{insertDate:-1}, limit:20});
		// check data retrieval 
		if(!allComments){
			return [{nodata:true}];
		}

	
		return allComments
	},
	
	
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
			Materialize.toast('Please Select!', 2000)
			return;
		}

		Meteor.call("rateThisModule", rating, postId);
		Materialize.toast('Rated!', 2000)
	},
	"click #moduleForum_submitForm":function(){

		if(!Meteor.user() || Meteor.loggingIn()===true){
			alert("Please log in to comment");
			return;
		}
		
		var formData = {
			anonymity :$("#moduleForum_checkbox").is(":checked"),
			comments:$("#moduleForum_comments").val().trim().slice(0,1000),
			insertDate: new Date(),
			insertedBy: Meteor.user().username,
			facilitator: this.facilitator,
			under : this.code,
			like:[],
		};

		// check if they have entered comments
		if(!formData.comments){
			Materialize.toast('Please enter comments!', 2000);
			return;
		}
		var submit = confirm("confirm submit? ");
		if(submit){
			Meteor.call("postComments",formData);
			Materialize.toast('Submitted!', 2000);
		}
	},
	
});

