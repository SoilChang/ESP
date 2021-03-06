Template.newsfeed_firstTab.onRendered(function(){
	
	// generate random offset 
	offset = Math.floor((Math.random() * 8) );
});
// declare global variable of offset
var offset = 0;


Template.newsfeed_firstTab.helpers({
	newActivity:function(){
		var sortedBy = Session.get("newsfeed_sortOrder")
		switch(sortedBy){
			case "date":
			// if it is date, we find everything and sort by date
				return ActivityCollection.find({},{sort:{date:-1},limit:10});
				break;
			default:
			// other than date, the rest are sorted by "type: sortedBy"
				return ActivityCollection.find({type: sortedBy},{sort:{date:-1},limit:10});
				break;
		}
	
	},
	cardView:function(){
		// to display different view
		var option = Session.get("newsfeed_display");
		return option;
	},
	

	// generate columns
	columnGenerator:function(){
		if(offset === 8){
			offset = 0;				
			var string = "offset-s"+ offset.toString(); 
			offset +=1;
			return string;
		}else{
			var string = "offset-s"+ offset.toString();

			offset +=1;
			return string;
		}
	},
});

