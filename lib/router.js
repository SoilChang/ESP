Router.configure({
	loadingTemplate:"loading",
	notFoundTemplate:"notFound"
});

Router.route("/",{
	name:"home",
	layoutTemplate:"layout",
	yieldRegions:{
		"home":{to:"body"}
	}
});