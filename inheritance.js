//alert ("this works!");

function inherit(proto) {
  function F() {}
  F.prototype = proto
  return new F
}
//vehicle
function vehicle(name){
	this.name = name;
}

//vehicle methods
vehicle.prototype = {
	function (move) {
	},
	damage: true,
	totaled: false
}

//car
function vehicle(car){
	this.car = car;
}

//inherit
car.prototype = inherit(vehicle.prototype);

//car methods


//usage
var car = new car('bluecar');

function vehicle(copcar){
	this.copcar = copcar;
}
copcar.prototype = inherit(vehicle.prototype);

function vehicle(tank){
	this.tank = tank;
}
tank.prototype = inherit(vehicle.prototype);

function vehicle(motorcycle){
	this.motorcycle	= motorcycle;
}
motorcycle.prototype = inherit(vehicle.prototype);