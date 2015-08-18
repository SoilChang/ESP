var list = [
	{
		type: "undergraduate",
		username: "Chang Ho Huan",
		email:"a0133370@u.nus.edu",
		year: 2,
		password:"a0133370",
		rank:"novice",
		matricNumber:"a0133370r"
	}
];


var len = list.length;
for(var i=0; i<len; i++){
	var object = Meteor.users.findOne({username:list[i].username});
	if(!object){
		// customise created users, this code has to exist before the action of creating users
		Accounts.onCreateUser(function(options,user){
			user.type=list[i].type;
			user.year = list[i].year;
			if(options.profile){
				user.profile = options.profile;
			}
			return user;
		});

		// create users
		Accounts.createUser({
			username:list[i].username,
			email:list[i].email,
			password:list[i].password
		});
		
	}
}

