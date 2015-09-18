Template.home_secondTab.helpers({
	newActivity:function(){
		var sortedBy = Session.get("home_sortOrder")
		switch(sortedBy){
			case "date":
			// if it is date, we find everything and sort by date
				return ActivityCollection.find({featured:true},{sort:{date:-1},limit:10});
				break;
			default:
			// other than date, the rest are sorted by "type: sortedBy"
				return ActivityCollection.find({type: sortedBy, featured:true},{sort:{date:-1},limit:10});
				break;
		}
	},
	cardView:function(){
		// to display different view
		var option = Session.get("home_firstTab_display");
		return option;
	}
})