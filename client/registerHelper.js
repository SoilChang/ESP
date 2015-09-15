Template.registerHelper("getAverage",function(sum,amount){

	// check wrong input type
	if(typeof sum != "number"){
		return "Wrong 'sum' input type"
	}else if(typeof amount != "number"){
		return "Wrong 'amount' input type"
	}

	if(amount === 0){
		return "undetermined"
	}
	return sum/amount;
})

Template.registerHelper("printArray",function(array){
	// check for array validaty 
	if(!array){
		return;
	}

	var string = "";
	var len = array.length;
	for(var i = 0; i< len; i++){
		string = string.concat(array[i],", ");
	}

	// remove the last comma
	len = string.length-2;
	string = string.slice(0,len);

	return string;
});



// format time
Template.registerHelper('formatTime', function(context, options) {
  if(context)
    return moment(context).format('hh:mm , DD/MM/YYYY');
});

Template.registerHelper('howLongAgo', function(context, options) {
  if(context)
    return moment(context).fromNow();
});


// the display is set by default to be card view
Session.setDefault("home_firstTab_display", true);
Session.setDefault("home_sortOrder", "date");