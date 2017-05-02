var person = {
	name : "Aly",
	distance_traveled : 0,
	say_name : function(){
		console.log(person.name);
	},
	say_something: function(phrase){
	console.log(`${person.name} says: ${phrase}`);
	},
	walk : function(){
		console.log(`${person.name} is walking`);
		person.distance_traveled += 3;
		return person;
	},
	run : function(){
		console.log(`${person.name} is running`);
		person.distance_traveled += 10;
		return person;
	},
	crawl : function(){
		console.log(`${person.name} is crawling`);
		person.distance_traveled += 1;
		return person;
	}
}
console.log(person.distance_traveled)
person.walk().run().crawl().run().walk()
console.log(person.distance_traveled)

function personConstructor(name, cohort){
	var ninja = {}
	var belt = ["yellow", "red", "black"];
	ninja.name = name;
	ninja.cohort = cohort;
	ninja.belt_level = 0;
	function levelUp(){
		if (ninja.belt_level < 2){
			ninja.belt_level += 1;
			ninja.belt = belt[ninja.belt_level];
		}
	return ninja;
	}
	ninja.belt = belt[ninja.belt_level];
	return ninja;
}

