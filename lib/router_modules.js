Router.route("/modules",{
	name:"modules",
	layoutTemplate:"layout",
	yieldRegions:{
		"modules":{to:"body"}
	},
});

Router.route("/modules/year1",{
	name:"modules_year1",
	layoutTemplate:"layout",
	yieldRegions:{
		"modules":{to:"body"},
		"yearone":{to:"moduleYear"}
	},
	data:function(){
		return Meteor.subscribe("moduleInfo");
	}
});


Router.route("/modules/year2",{
	name:"modules_year2",
	layoutTemplate:"layout",
	yieldRegions:{
		"modules":{to:"body"},
		"yeartwo":{to:"moduleYear"}
	},
});

Router.route("/modules/year3",{
	name:"modules_year3",
	layoutTemplate:"layout",
	yieldRegions:{
		"modules":{to:"body"},
		"yearthree":{to:"moduleYear"}
	},
});

Router.route("/modules/year4",{
	name:"modules_year4",
	layoutTemplate:"layout",
	yieldRegions:{
		"modules":{to:"body"},
		"yearfour":{to:"moduleYear"}
	},
});

Router.route("/modules/:code",{
	name:"moduleForum",
	layoutTemplate:"layout",
	yieldRegions:{
		"modules":{to:"body"},
		"moduleForum":{to:"moduleYear"}
	},
	waitOn:function(){
		return Meteor.subscribe("moduleInfo");
	},
	data:function(){
		return ModuleInfo.findOne({code: this.params.code});
	}
})