Meteor.publish("currentUser",function(){
	if(!this.userId)
		return null;
	return Meteor.users.find( {_id : this.userId} );
});

Meteor.publish("allUserData",function(){
	return Meteor.users.find({},{fields:{
		username:1,
		email:1,
		type:1,
		year:1,
	}
	});
});

Meteor.publish("eqpList",function(){
	return eqpList.find();
})