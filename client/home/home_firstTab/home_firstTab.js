Template.home_firstTab.helpers({
	newActivity:function(){
		return ActivityCollection.find({},{sort:{date:-1},limit:10});
	}
})