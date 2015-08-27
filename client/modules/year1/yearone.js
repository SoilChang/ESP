Template.yearone.helpers({
	semOne:function(){
		return ModuleInfo.find({sem:1.1});
	},

	semTwo:function(){
		return ModuleInfo.find({sem:1.2});
	},

});

Template.registerHelper("printArray",function(array){
	var string = "";
	var len = array.length;
	for(var i = 0; i< len; i++){
		string = string.concat(array[i],", ");
	}

	// remove the last comma
	len = string.length-2;
	string = string.slice(0,len);

	return string;
})