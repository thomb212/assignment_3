function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	background(130, 130, 170);


for(var i = 0; i < 20; i++){

	stroke(255, 255, 255);
	noFill();
	ellipse(320, 200, i * 40 + 10, i * 40 + 10);

	stroke (0, 0, 0);
	noFill();
	ellipse (320, 200, i * 40 + 25, i * 40 + 25);
}
}
