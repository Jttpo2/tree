new p5();

let backgroundColor;
let mouseMovedFromInitPosition = false;
let tree;

function setup() {
	let canvas = createCanvas(
		window.innerWidth,
		window.innerHeight
	);

	backgroundColor = color(200);

	tree = new Tree();
}

function draw() {
	background(backgroundColor);
	if(!mouseMovedFromInitPosition) {
		mouseMovedFromInitPosition = mouseX != 0;
	}
	tree.display();


}

class Tree {
	constructor() {
		this.lines = [];

		this.theta = PI;
		this.branchLength = height/3;
		this.aspectRatio = 1/10;
		this.minLength = 2;
	}

	branch(length) {
		strokeWeight(length * this.aspectRatio);
		line(0, 0, 0, -length);
		translate(0, -length);
		length *= 2/3;
		if (length < this.minLength) return;
		push();
		rotate(this.theta);
		this.branch(length);
		pop();
		push();
		rotate(-this.theta);
		this.branch(length);
		pop();
	}

	display() {
		if (mouseMovedFromInitPosition) {
			this.theta = map(mouseX, 0, width, 0, PI);
		} else {
			this.theta = PI * 1/7;
		}

		stroke(50);
		push();
		translate(width/2, height);
		this.branch(this.branchLength, this.branchWidth);
		pop();
		this.lines.forEach(line => line.display());
	}

}

function windowResized() {
	resizeCanvas(
		window.innerWidth,
		window.innerHeight);
	}
