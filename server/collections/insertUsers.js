var list = [
	{
		type: "undergraduate",
		username: "Chang Ho Huan",
		email:"a0133370@u.nus.edu",
		year: 2,
		password:"a0133370",
		rank:"novice",
		matricNumber:"a0133370r",
		lastLogin:undefined,
	},
	{
		type: "undergraduate",
		username: "Jon Snow",
		email:"b0133370@u.nus.edu",
		year: 2,
		password:"b0133370",
		rank:"novice",
		matricNumber:"b0133370r",
		lastLogin:undefined,
	}
];

// customise created users, this code has to exist before the action of creating users
Accounts.onCreateUser(function(options,user){
	user.type=list[i].type;
	user.year = list[i].year;
	user.email=list[i].email;
	user.lastLogin = new Date();
	if(options.profile){
		user.profile = options.profile;
	}
	return user;
});


var len = list.length;
for(var i=0; i<len; i++){
	var object = Meteor.users.findOne({username:list[i].username});
	if(!object){

		// create users
		Accounts.createUser({
			username:list[i].username,	
			password:list[i].password,
			email:list[i].email
		});

		
	}
}
