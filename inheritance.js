$(document).ready(function() {
  var width = $(document).width();
  var height = $(document).height();
  var vid = 0;

  $('#btnAddCar').click(function() {
    var div = $('<div class="Car"></div>').attr('id', 'v' + vid);
    $(document.body).append(div);
    var c = new Car('#v' + vid);
    c.move();
    vid++;
  });

  $('#btnAddCopCar').click(function() {
    var div = $('<div class="CopCar"></div>').attr('id', 'v' + vid);
    $(document.body).append(div);
    var v = new CopCar('#v' + vid);
    v.move();
    vid++;
    setInterval(function() {
      blink();
    }, 1000);

    function blink() {
      $(".CopCar").fadeTo(100, 0.1).fadeTo(200, 1.0);
    }
  });

  $('#btnAddMotorcycle').click(function() {
    var div = $('<div class="Motorcycle"></div>').attr('id', 'v' + vid);
    $(document.body).append(div);
    var m = new Motorcycle('#v' + vid);
    m.move();
    vid++;
  });

  $('#btnAddTank').click(function() {
    var div = $('<div class="Tank"></div>').attr('id', 'v' + vid);
    $(document.body).append(div);
    var t = new Tank('#v' + vid);
    t.move();
    vid++;
  });

  function inherit(proto) {
    function F() {}
    F.prototype = proto;
    return new F;
  }

  //vehicle constructor
  function Vehicle(divid) {
    this.tolerance = 1;
    this.divid = '#' + divid;
    this.speed = 500;
  }

  //vehicle methods 'prototype of class'
  Vehicle.prototype.moveRight = function() {
    $(this.divid).animate({
      left: width
    }, {
      duration: this.speed,
      queue: false,
      complete: this.moveLeft.bind(this)
    });

    function randomSpawnPoint() {
      var x = Math.floor((Math.random() * width) + 1);
      var y = Math.floor((Math.random() * height) + 1);
      $("#v" + vid).css({
        "left": x + "px",
        "top": y + "px",
      });
    }
    randomSpawnPoint();
  };
  Vehicle.prototype.moveLeft = function() {
    console.log(this.divid);
    $(this.divid).animate({
      left: 0
    }, {
      duration: this.speed,
      queue: false,
      complete: this.moveRight.bind(this)
    });

    function randomSpawnPoint() {
      var x = Math.floor((Math.random() * width) + 1);
      var y = Math.floor((Math.random() * height) + 1);
      $("#v" + vid).css({
        "left": x + "px",
        "top": y + "px",
      });
    }
    randomSpawnPoint();
  };
  Vehicle.prototype.moveDown = function() {
    console.log(this.divid);
    $(this.divid).animate({
      top: height
    }, {
      duration: this.speed,
      queue: false,
      complete: this.moveUp.bind(this)
    });

    function randomSpawnPoint() {
      var x = Math.floor((Math.random() * width) + 1);
      var y = Math.floor((Math.random() * height) + 1);
      $("#v" + vid).css({
        "left": x + "px",
        "top": y + "px",
      });

    }
    randomSpawnPoint();
  };
  Vehicle.prototype.moveUp = function() {
    console.log(this.divid);
    $(this.divid).animate({
      top: 0
    }, {
      duration: this.speed,
      queue: false,
      complete: this.moveDown.bind(this)
    });

    function randomSpawnPoint() {
      var x = Math.floor((Math.random() * width) + 1);
      var y = Math.floor((Math.random() * height) + 1);
      $("#v" + vid).css({
        "left": x + "px",
        "top": y + "px",
      });
    }
    randomSpawnPoint();
  };

  Vehicle.prototype.move = function(direction) {
    this.moveRight();
    this.moveDown();
  };

  Vehicle.prototype.remove = function() {};

  //car constructor
  function Car(vid) {
    this.tolerance = 2;
    this.speed = 2000;
    this.divid = vid;
    this.move = function() {
      this.moveRight();
    };
  }
  Car.prototype = Vehicle.prototype;

  //copcar constructor
  function CopCar(vid) {
    this.tolerance = 3;
    this.speed = 2000;
    this.divid = vid;
    this.move = function() {
      this.moveDown();
    };
  }
  CopCar.prototype = Vehicle.prototype;

  //tank
  function Tank(vid) {
    this.tolerance = 10;
    this.speed = 6000;
    this.divid = vid;
    this.move = function() {
      this.moveRight();
    };
  }
  Tank.prototype = Vehicle.prototype;

  //motorcycle
  function Motorcycle(vid) {
    this.tolerance = 10;
    this.speed = 1000;
    this.divid = vid;
  }
  Motorcycle.prototype = Vehicle.prototype;

});