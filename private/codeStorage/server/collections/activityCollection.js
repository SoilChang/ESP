var list=[
	{
		type: "event",
		featured:false,
		title:"NUS ESP alumnus shines at MIT – conferred Exceptional Performance Award in his first year",
		content:"ESP Alumnus Huang Wenxuan has been conferred Exceptional Performance Award in his first year. For his course work which comprises four core courses, Wenxuan scored ‘A+’ for two courses, and ‘A’ for the other two. He also shines in his research, coming out with breakthroughs which his supervisor is extremely happy about. This is a great feat, as scoring ‘A+’ at MIT is indeed a rarity.",
		picture:"https://scontent-sin1-1.xx.fbcdn.net/hphotos-xfl1/v/t1.0-9/11954673_10203354766908370_4338132482266839348_n.jpg?oh=07bb7ddeea93487863c3825a02278f0c&oe=565D5FA5",	
		icon:"https://scontent-sin1-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/12003357_10203354769588437_4929679037717890579_n.jpg?oh=2d8a953db2d19b83c5c8ca01ebab3647&oe=56A74425",
		date: "Tue Aug 25 2015 18:59:17 GMT+0800 (China Standard Time)",

	},
	{
		type:"talk",
		featured:true,
		title:"ESP team wins 2nd prize and Merit award at Energy Innovation Challenge 2015",
		content:"ENGINEERING Science Programme team comprising Ling Evan, Lim Zeming, Eugene Soh and Tan Yan Han have clinched the 2nd prize and Merit award at the Energy Innovation Challenge 2015 organised by the Institution of Engineers Singapore in conjunction with the World Engineers Summit. Facing strong competition from 22 teams comprising local and international universities, they walked away with a cash prize of $6,000 and a trophy. ESP will like to congratulate them for their achievements!",
		picture:"https://scontent-sin1-1.xx.fbcdn.net/hphotos-xfl1/v/t1.0-9/12003948_10203354766828368_2939808435807941010_n.jpg?oh=7f07060ca9b282b91e7749a9cbc73cc7&oe=565E8CFB",
		icon:"https://scontent-sin1-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/12009629_10203354769628438_5767431523621946318_n.jpg?oh=2831b5725ea506aca1612722c95a9a35&oe=566F6129",
		date:"Tue Aug 25 2015 18:20:17 GMT+0800 (China Standard Time)",
	},
	{
		type:"competition",
		featured:false,
		title:"Assistant Professor Ernest Chua wins Minister for National Development’s R&D Award 2015",
		content:"Assistant Professor Ernest Chua has won the Minister for National Development’s R&D Award 2015. His project titled Novel Nano-Woven Membrane Air Dehumidification to Enhance Building Energy Efficiency was the only one to be bestowed the Distinguished Award, the highest category of award.",
		picture:"https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-0/s235x165/11209669_10203354767188377_3631410354247389422_n.jpg?oh=c9fd64810fb6abe6048ba4f100096a36&oe=56A44E02&__gda__=1449769908_ccd4114a7222302416135d31e295319d",
		icon:"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/11990385_10203354769468434_4888109653619903998_n.jpg?oh=95bb4e81ad561065b9a0f8b018e556df&oe=565D6CD7&__gda__=1453356858_cedf1ad9678645a07d339796f7fd56a2",
		date:"Tue Aug 23 2015 18:20:17 GMT+0800 (China Standard Time)",
	},
	{
		type:"competition",
		featured:true,
		title:"ESP Student's paper wins Silver Prize for the Most Outstanding Paper in the IEEE International Conference on Electronics, Information and Communication (ICEIC 2015)",
		content:"ESP is pleased to announce that ESP final year student, Teh Ying Shi, together with Dr Adrian Koh and Goh Yu Feng (ESP Alumni) had clinched the Silver prize for the Most Outstanding Paper in the IEEE International Conference on Electronics, Information and Communication (ICEIC 2015) for the paper, 'Large actuation of an acrylic-based dielectric elastomer actuator in tubular configuration'. Congratulations on this great achievement!",
		picture:"https://scontent-sin1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/12027748_10203354766868369_9107416157588472304_n.jpg?oh=a1fcfccd2e3c89a4787968f57f5a4dec&oe=569C9981",
		icon:"https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/11986449_10203354769788442_1243402813004296483_n.jpg?oh=ae5c53dc5ba7b76cc3786f125586457b&oe=56A7F488&__gda__=1449172325_1c510946fe251f40e1a91b7cd167b5a0",
		date:"Tue Aug 22 2015 18:20:17 GMT+0800 (China Standard Time)",
	},

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

