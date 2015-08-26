var list=[
// year 1 sem 1
	{
		sem:1.1,
		code:"PC1433", 	
		title:"Mechenics and Weaves"
	},
	{
		sem:1.1,
		code:"ESP1100",
		title:"Weaves",	
	},
	

// year 1 sem 2
	{
		sem:1.2,
		code:"ABC1125",
		title:"philosophy",
	},
	{
		sem:1.2,
		code:"ESP1233",
		title:"psychology"
	}
];

var len = list.length;
for(var i=0; i<len; i++){
	var object = ModuleInfo.findOne({code:list[i].title});
	if(!object){
		ModuleInfo.insert(list[i]);
	}else{
		ModuleInfo.remove({_id: object._id});
		_.extend( list[i], {_id:object._id});
		ModuleInfo.insert(list[i]);
	}
}