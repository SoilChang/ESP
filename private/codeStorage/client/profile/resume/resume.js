Template.resume.events({
	'submit form':function(e,t){
		e.preventDefault();

		// collect all the data into an object
		var update = {
			education: $(e.target).find('[name=education_form]').val(),
			workExperience : $(e.target).find('[name=workExperience_form]').val(),
			technicalSkills :$(e.target).find('[name=technicalSkills_form]').val(),
			cca :$(e.target).find('[name=cca_form]').val()
		}

	
		// remove unfilled keys
		if( !update.education.trim() ){
			update = _.omit(update,"education")
		}	
		if( !update.workExperience.trim() ){
			update = _.omit(update,"workExperience")
		}
		if( !update.technicalSkills.trim()){
			update = _.omit(update,"technicalSkills")
		}
		if( !update.cca.trim()){
			update = _.omit(update,"cca")
		}

		Meteor.call("updateResume", update);

	},
});

Template.resume.onRendered(function(){
	$('#resume_rightBar').pushpin({top: 0 ,offset:300});
});

Template.resume.helpers({
	thereIsData:function(data){
		if(data){
			return data;
		}else{
			return "No data found"
		}

	}
})