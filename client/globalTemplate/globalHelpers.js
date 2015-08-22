// this helper is to render data context to dynamic route
Template.registerHelper("loadOwnData",function(){
	return Meteor.user();
})