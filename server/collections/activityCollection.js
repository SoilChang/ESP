var list=[
	{
		title:"Chang Ho Huan just became a douchebag",
		content:"Prof Wang Chien Ming has been awarded the status of Outstanding Reviewer for neering Structures (one of the best international journals in structures)	Prof Wang Chien Ming has been awarded the status of Outstanding Reviewer for Engineering Structures (one of the best international journals in structures). This status, achieved in December 2014, is given for those reviewers within the top 10th percentile of reviewers for the Journal, in terms of the number of manuscript reviews completed in the last two years. For Engineering Structures, this meant a minimum of 6 reviews in two years. The award certificate is given in the attached pdf file.",
		picture:"https://scontent-sin1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11904650_10203260558873228_7315768884771455913_n.jpg?oh=26954be0c2404b8a95f484fb702a3c0f&oe=5681CF74",
		icon:"https://scontent-sin1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11904650_10203260558873228_7315768884771455913_n.jpg?oh=26954be0c2404b8a95f484fb702a3c0f&oe=5681CF74",
		date: "Tue Aug 25 2015 18:59:17 GMT+0800 (China Standard Time)",

	},
	{
		title:"ESP team wins 2nd prize and Merit award at Energy Innovation Challenge 2015",
		content:"ENGINEERING Science Programme team comprising Ling Evan, Lim Zeming, Eugene Soh and Tan Yan Han have clinched the 2nd prize and Merit award at the Energy Innovation Challenge 2015 organised by the Institution of Engineers Singapore in conjunction with the World Engineers Summit. Facing strong competition from 22 teams comprising local and international universities, they walked away with a cash prize of $6,000 and a trophy. ESP will like to congratulate them for their achievements!",
		picture:"https://scontent-sin1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11903768_10203260614154610_5727316287681451197_n.jpg?oh=557936c9b23eae9bf4ad58d19dc3944f&oe=5639C57D",
		icon:"https://scontent-sin1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11903768_10203260614154610_5727316287681451197_n.jpg?oh=557936c9b23eae9bf4ad58d19dc3944f&oe=5639C57D",
		date:"Tue Aug 25 2015 18:20:17 GMT+0800 (China Standard Time)",
	}
];


var len = list.length;
for(var i=0; i<len; i++){
	var object = ActivityCollection.findOne({title:list[i].title});
	if(!object){
		ActivityCollection.insert(list[i]);
	}else{
		ActivityCollection.remove({_id: object._id});
		_.extend( list[i], {_id:object._id});
		ActivityCollection.insert(list[i]);
	}
}

