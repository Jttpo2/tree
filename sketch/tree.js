new p5();

let backgroundColor;
let lines = [];

let snowflake = null;

function setup() {
	let canvas = createCanvas(
		window.innerWidth,
		window.innerHeight
	);

	backgroundColor = color(200);

	snowflake = new Snowflake(5);
}

function draw() {
	background(backgroundColor);

	snowflake.display();
}

function windowResized() {
	resizeCanvas(
		window.innerWidth,
		window.innerHeight);
	}
