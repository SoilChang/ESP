Router.route("/Module",{
	name: "Module",
	layoutTemplate:"layout",
	yieldRegions:{
		"Module":{to: "body"}
	},
});

Router.route("/Module/year1",{
	name:"Module_year1",
	layoutTemplate:"layout",
	yieldRegions:{
		"Module":{to:"body"},
		"yearOne":{to:"moduleCenter"}
	},
	waitOn:function(){
		return Meteor.subscribe("moduleInfo");
	}
});


Router.route("/Module/year2",{
	name:"Module_year2",
	layoutTemplate:"layout",
	yieldRegions:{
		"Module":{to:"body"},
		"yearTwo":{to:"moduleCenter"}
	},
});

Router.route("/Module/year3",{
	name:"Module_year3",
	layoutTemplate:"layout",
	yieldRegions:{
		"Module":{to:"body"},
		"yearThree":{to:"moduleCenter"}
	},
});

Router.route("/Module/year4",{
	name:"Module_year4",
	layoutTemplate:"layout",
	yieldRegions:{
		"Module":{to:"body"},
		"yearFour":{to:"moduleCenter"}
	},
});

Router.route("/Module/:code",{
	name:"moduleForum",
	layoutTemplate:"layout",
	yieldRegions:{
		"Module":{to:"body"},
		"moduleForum":{to:"moduleCenter"}
	},
	waitOn:function(){
		return [Meteor.subscribe("moduleInfo"),
				Meteor.subscribe("currentUser"),
				Meteor.subscribe("moduleComments", this.params.code),
		];
	},
	data:function(){
		return ModuleInfo.findOne({code: this.params.code});
	}
});

Router.route("/nusmod",{
	name:"nusmod",
	layoutTemplate:"layout",
	yieldRegions:{
		"nusmod":{to:"body"}
	},
})