Template.espLion.onRendered(function(){
	$("#espLionLogo").hover(function(){
		document.getElementById("espLionLogo").src ="/images/utility/espLionLogo_red.png"
		
	},function(){
		document.getElementById("espLionLogo").src  = "/images/utility/espLionLogo.png"
	});
	
});


Template.espLion.helpers({
});

Template.espLion.events({
})