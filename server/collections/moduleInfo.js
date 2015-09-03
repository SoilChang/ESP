var list=[
// year 1 sem 1
	{
		sem:1.1,
		code:"PC1433", 	
		title:"Mechanics and Waves",
		description:"The module consists of two parts. In Part 1, students will be introduced to the concepts and principles of mechanics of rigid bodies and their applications to solve practical problems. The topics to be covered include: force systems, equilibrium, kinematics of particles, kinetic of particles, work and energy, impulse and momentum, kinetics of system of particles, kinematics of rigid bodies, damped and undamped vibrations. In Part 2, students will be introduced to the fundamentals of wave mechanics. General description of wave propagation; types of waves: longitudinal, transverse and circular waves; speed of a travelling wave; propagation of energy and momentum; power and intensity; sound waves, oscillations of a string; light waves; superposition of waves; interference; standing waves, resonant waves; harmonics; resonance.",
		facilitator:["Zhang Chun", "Shen Lei"],
		preclusion:["abc1234", "ts333"],
		prerequisite:["std1234","abc6789"],
		comments:[],
		voters:[],
		rating:[],		
	},
	{
		sem:1.1,
		code:"ESP1100",
		title:"Waves",
		description:"sdf",
		facilitator:["zhang Chun", "Shen Lei"],
		preclusion:['abs'],
		prerequisite:['asdf'],	
		comments:[],
		voters:[],
		rating:[],
	},
	

// year 1 sem 2
	
];

var len = list.length;
for(var i=0; i<len; i++){
	var object = ModuleInfo.findOne({code:list[i].code});
	if(!object){
		ModuleInfo.insert(list[i]);
	}else{
		ModuleInfo.remove({_id: object._id});
		_.extend( list[i], {_id:object._id});
		ModuleInfo.insert(list[i]);
	}
}