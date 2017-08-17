var serpiente;
var escala = 10;
var speed = 1;
var food;

function setup() {
  createCanvas(600, 600);
  serpiente = new Snake();
  frameRate(10);
  pickLocation();
}

function draw() {
  background(51);

  serpiente.death();
  serpiente.update();
  serpiente.show();

  if (serpiente.eat(food)) {
    pickLocation();
  }

  fill(255, 0, 100);
  rect(food.x,food.y, escala, escala);
}

//when the snake eat the food, we will need to choose a new random location for
//food. This method will do this for us.
function pickLocation(){
  var cols = floor(width/escala);
  var rows = floor(height/escala);
  food = createVector (floor(random(cols)), floor(random(rows)));
  food.mult(escala);
}

//mousePressed to cheat and eat a lot of food. (to test)
function mousePressed(){
  serpiente.total++;
}

//When we pressed the arrows in the keyboard, the snake going to move
function keyPressed() {
  if (keyCode === UP_ARROW) {
    serpiente.direction(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    serpiente.direction(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    serpiente.direction(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    serpiente.direction(-1, 0);
  }
}

//To go faster or slower by scrolling the mouseWheel up or down.
function mouseWheel(event) {
  if (speed += event.delta) {
    serpiente.goFaster();
  } else if (speed -= event.delta) {
    serpiente.goSlower();
  }


}
