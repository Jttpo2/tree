new p5();

let backgroundColor;

function setup() {
	let canvas = createCanvas(
		window.innerWidth,
		window.innerHeight
		);

	backgroundColor = color(200);
}

function draw() {
	background(backgroundColor);

	drawCircle(width / 2, height / 2, 400);
}

function windowResized() {
	resizeCanvas(
		window.innerWidth,
		window.innerHeight);
}

function drawCircle(x, y, radius) {
	stroke(100);
	fill(50);
	ellipse(x, y, radius, radius);
	if (radius > 2) {
		drawCircle(x, y, radius * 0.75);
	}
}
