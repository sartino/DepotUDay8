//alert ("this works!");
function inherit(proto) {
  function F() {}
  F.prototype = proto
  return new F
}
	//vehicle constructor
	function Vehicle(){
		this.name = name;
	}

	//vehicle methods 'prototype of class'
	Vehicle.prototype.move = function() { 
	}
	Vehicle.prototype.damage = function () {
	}
	Vehicle.prototype.totaled = function() {
	}
	Vehicle.prototype.damageTolerance = function() {
	}

	//car constructor
	function Car() {
		//code block
	}
	Car.prototype = inherit(Vehicle.prototype);
	Car.prototype.damageTolerance = 2;
	var car = new Car();
	car.move();
	
	//copcar
	function Copcar() {
		//code block
	}
	
	Copcar.prototype = inherit(Vehicle.prototype);
	Copcar.prototype.damageTolerance = 3;
	var copcar = new Copcar;
	copcar.move();

	//tank
	function Tank() {
	}
	Tank.prototype = inherit(Vehicle.prototype);
	Tank.prototype.damageTolerance = 10;
	var tank = new Tank;
	tank.move();

	//motorcycle
	function Motorcycle() { 
	}
	Motorcycle.prototype = inherit(Vehicle.prototype);
	Motorcycle.prototype.damageTolerance = 1;
	var motorcycle = new Motorcycle();
	motorcycle.move();