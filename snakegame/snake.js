function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

//Way direction depend that key you've pressed
  this.direction = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(pos) {
    var distance = dist(this.x, this.y, pos.x, pos.y);
    if (distance < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var distance = dist(this.x, this.y, pos.x, pos.y);
      if (distance < 1) {
        this.total = 0;
        this.tail = [];
      }
    }
  }  

  this.goFaster = function() {
    speed = speed + 1;
  }
  this.goSlower = function() {
    if (speed >= 0) {
      speed = speed - 1;
    }
  }

  this.update = function() {
    //If no food has been eaten, total is the same lenght as tail.
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);


    this.x = this.x + this.xspeed * escala;
    this.y = this.y + this.yspeed * escala;

    this.x = constrain(this.x, 0, width - escala);
    this.y = constrain(this.y, 0, height - escala);
  }
  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, escala, escala);
    }
    rect(this.x, this.y, escala, escala);
  }
}
