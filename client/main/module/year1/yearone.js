Template.yearOne.helpers({
	semOne:function(){
		return ModuleInfo.find({sem:1.1});
	},

	semTwo:function(){
		return ModuleInfo.find({sem:1.2});
	},

});

