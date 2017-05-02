function VehicleConstructor(name, wheels, passengers, speed){
	if (!(this instanceof VehicleConstructor)){
		return new VehicleConstructor(name,wheels,passengers,speed);
	}
	var distance_travelled = 0;
	var self = this;
	var updateDistanceTravelled = function(){
		distance_travelled += self.speed;
	}; 
	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.speed = speed;
	this.makeNoise = function (noise){
		var noise = noise 
		console.log(noise)
	};
	this.move = function(){
		this.makeNoise();
		updateDistanceTravelled();
	};
	this.checkMiles = function(){
		console.log(distance_travelled);
	};
}


var Car = new VehicleConstructor('car', 4, 2, 80);
Car.makeNoise('BEEP BEEP')
Car.move();
Car.checkMiles();
console.log(Car.speed);
