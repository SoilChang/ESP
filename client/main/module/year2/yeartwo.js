Template.yearTwo.helpers({
	semOne:function(){
		return ModuleInfo.find({sem:2.1});
	},

	semTwo:function(){
		return ModuleInfo.find({sem:2.2});
	},

});
