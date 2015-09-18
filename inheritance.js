$(document).ready(function() {
  	var width = $(document).width();
  	var height = $(document).height();
   	var vid = 0;
   
$('#btnAddCar').click(function() {
//	var div = '<div class="Car" id="v' + vid.toString() + '"></div>';
 	var div = $('<div class="Car"></div>').attr('id', 'v'+ vid);
  	$(document.body).append(div);
  	var c = new Car('#v'+vid);
   	c.move();
    vid++;
});

$('#btnAddCopCar').click(function() {
 	var div = $('<div class="CopCar"></div>').attr('id', 'v'+ vid);
  	$(document.body).append(div);
  	var v = new CopCar('#v'+vid);
  	v.move();
  	vid++;
});

$('#btnAddMotorcycle').click(function() {
	var div = $('<div class="Motorcycle"></div>').attr('id', 'v'+ vid);
  	$(document.body).append(div);
  	var c = new Car('#v'+vid);
   	c.move();
    vid++;
});

$('#btnAddTank').click(function() {
	var div = $('<div class="Tank"></div>').attr('id', 'v'+ vid);
  	$(document.body).append(div);
  	var c = new Car('#v'+vid);
   	c.move();
    vid++;
});
	
	function inherit(proto) {
		function F() {}
			F.prototype = proto
		return new F
	}
	
	//vehicle constructor
	function Vehicle(divid){
		//this.name = name;
		this.tolerance = 1;
		this.divid = '#' + divid;
		this.speed = 500;		
	}
	
	//vehicle methods 'prototype of class'
	Vehicle.prototype.moveRight = function() {
       $(this.divid).animate({
           left: width}, 
           { duration: this.speed, queue: false,
           complete: this.moveLeft.bind(this)}
       );
   };
   Vehicle.prototype.moveLeft = function() {
       console.log(this.divid);
       $(this.divid).animate({
           left: 0}, 
           { duration: this.speed, queue: false,
           complete: this.moveRight.bind(this)}
       );
   }
   Vehicle.prototype.moveDown = function() {
       //console.log(this.divid);
       $(this.divid).animate({
           top: height}, 
           { duration: this.speed, queue: false, 
           complete: this.moveUp.bind(this)}
       );
   }
   Vehicle.prototype.moveUp = function() {
       console.log(this.divid);
       $(this.divid).animate({
           top: 0}, { 
               duration: this.speed, 
               queue: false, 
               complete: this.moveDown.bind(this)
           }
       );
   }
   Vehicle.prototype.move = function (direction) {
       this.moveRight();
       this.moveDown();
   }
       
   Vehicle.prototype.remove = function () {
   }

	//car constructor
	function Car(vid) {
		this.tolerance = 2;
		this.speed = 1000;
		this.divid = vid;
		this.move = function() {
			this.moveRight();
		}
	}
	Car.prototype = Vehicle.prototype;
	//var car = new Car();
	//car.moveRight();
	
	//copcar constructor
	function CopCar(vid) {
		this.tolerance = 2;
		this.speed = 1000;
		this.divid = vid;
		this.move = function() {
			this.moveDown();
		}
	}
	
	CopCar.prototype = Vehicle.prototype;
	
	//var copcar = new Copcar;
	//copcar.move();

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
	
	});