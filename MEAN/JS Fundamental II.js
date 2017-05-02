var x = 2 
var y = 5
sum = 0 
var arr = [1, 2, 3, -5, 10]

for (i=x; i<y+1; i++){
	sum += i
}
console.log(sum);

var Min = function findMin(){
	min = 0;
	for (i=0; i<arr.length; i++){
		if (min>arr[i]){
			min=arr[i];
		}
	}
	console.log(min);
}


var Avg = function findAvg(){
	sum = 0 
	for (i=0; i<arr.length; i++){
		sum += arr[i];
	}
	console.log(sum/arr.length);
}
Min(arr);
Avg(arr);
function sumXY(x, y) {
    var sum = 0;
    for (var i = x; i < y + 1; i++) {
        sum += i;
    }
    return sum;
}

function findMin(arr) {
    if (arr) {
        var min = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
}

function findAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Anonymous functions assigned to variables.

var sumXY = function(x, y) {
    var sum = 0;
    for (var i = x; i < y + 1; i++) {
        sum += i;
    }
    return sum;
};

var findAvg = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

var findMin = function findMin(arr) {
    if (arr) {
        var min = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
};

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
