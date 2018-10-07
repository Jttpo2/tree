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

	// drawCircle(width / 2, height / 2, 400);
	cantor(10, 20, width - 20);
}

function windowResized() {
	resizeCanvas(
		window.innerWidth,
		window.innerHeight);
	}

	function drawCircle(x, y, radius) {
		stroke(100);
		noFill();
		ellipse(x, y, radius, radius);
		if (radius > 12) {
			drawCircle(x + radius / 2, y, radius / 2);
			drawCircle(x - radius / 2, y, radius / 2);
			drawCircle(x, y + radius / 2, radius / 2);
			drawCircle(x, y - radius / 2 , radius / 2);
		}
	}

	function cantor(x, y, len) {
		stroke(50);
		strokeWeight(1);
		noFill();
		line(x, y, x + len, y);
		ellipse(x + len / 2, y, len, len);

		if (len > 2) {
				let nextLen = len / 3;
				y += 10;
				cantor(x, y, nextLen);
				cantor(x + nextLen * 2, y, nextLen);
		}
	}
