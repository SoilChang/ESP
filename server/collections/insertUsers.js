var list = [
	{	
		username: "Chang Ho Huan",
		password:"a0133370",
		type: "undergraduate",
		email:"a0133370@u.nus.edu",
		year: 0,
		matricYear: new Date(2014,8,1,0,0,0,0),
		rank:"novice",
		matricNumber:"A0133370R",
		lastLogin:undefined,
		rank:"novice",
		exp: 0,
	},
	{
		type: "undergraduate",
		username: "Jon Snow",
		email:"b0133370@u.nus.edu",
		year: 0,
		matricYear: new Date(2014,8,1,0,0,0,0),
		password:"b0133370",
		rank:"novice",
		matricNumber:"B0133370R",
		lastLogin:undefined,
		exp: 0,
	}
];

// customise created users, this code has to exist before the action of creating users
Accounts.onCreateUser(function(options,user){
	user.type=list[i].type;
	user.year = list[i].year;
	user.email=list[i].email;
	user.lastLogin = new Date();
	user.matricYear = list[i].matricYear;
	user.matricNumber = list[i].matricNumber;
	user.rank = list[i].rank;
	user.exp = list[i].exp;
	if(list[i].type === "undergraduate"){
		user._id = list[i].matricNumber;	
	}
	
	
	if(options.profile){
		user.profile = options.profile;
	}
	return user;
});

// creating new users if possible
var len = list.length;
for(var i=0; i<len; i++){
	var object = Meteor.users.findOne({username:list[i].username});
	if(!object){
		// create users
		Accounts.createUser({
			username:list[i].username,	
			password:list[i].password,
			email:list[i].email,

		});
	}
}


// user update' year 
Meteor.startup(function(){
	var allUser = Meteor.users.find().fetch();
	var length = allUser.length;

	for(var i = 0; i< length; i++){
		// set current year of student
		var birth = moment(allUser[i].matricYear);
		var today = moment(new Date());
		var diff = Math.ceil(today.diff(birth,"years",true));
		Meteor.users.update({_id:allUser[i]._id},{$set:{year:diff}});
	}
});
