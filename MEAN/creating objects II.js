function VehicleConstructor(name, wheels, passengers, speed){
	if (!(this instanceof VehicleConstructor)){
		return new VehicleConstructor(name,wheels,passengers,speed);
	}
	var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";
	var distance_travelled = 0;
	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.speed = speed;
	this.vin = createVin();

	function createVin(){
		var vin = '';
		for (var i = 0; i < 17; i++){
			vin += chars[Math.floor(Math.random()*35)];
		}
		return vin;
	}
}
VehicleConstructor.prototype.makeNoise = function (noise){
		var noise = noise;
		console.log(noise);
		return this;
};
VehicleConstructor.prototype.move = function(){
	this.makeNoise();
	updateDistanceTravelled();
	return this;
};
VehicleConstructor.prototype.checkMiles = function(){
	console.log(distance_travelled);
};
VehicleConstructor.prototype.updateDistanceTravelled = function(){
	this.distance_travelled += this.speed;
	console.log(this.distance_travelled);
	return this;
}

var car = new VehicleConstructor('car', 4, 4, 80);
car.makeNoise("Boo");

