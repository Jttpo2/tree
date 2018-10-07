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
		this.branches = [];
		this.branchDepth = 1;

		this.initialBranchLength = height/2;

		this.branchLengthRatio = 2/3;
		this.theta = PI;
		this.aspectRatio = 1/10;
		this.minLength = 2;

		let foot = createVector(width/2, height);
		let dirLength = createVector(0, -this.initialBranchLength);
		this.branches.push(
			new Branch(
				foot,
				dirLength
			)
		);

		for (let b=0; b<this.branchDepth; b++) {
			this.generate();
		}
	}

	generate() {
		let next = [];
		this.branches.forEach(b => {
			let start = b.getEnd();
			next.push(
				new Branch(
					start,
					b.getDirlength().mult(this.branchLengthRatio).rotate(-this.theta)
				)
			);
		 	next.push(
				new Branch(
					start,
					b.getDirlength().mult(this.branchLengthRatio).rotate(this.theta)
					));
		});
		this.branches = next;
	}

	// branch(length) {
	// 	strokeWeight(length * this.aspectRatio);
	// 	line(0, 0, 0, -length);
	// 	translate(0, -length);
	// 	length *= this.branchLengthRatio;
	// 	if (length < this.minLength) return;
	// 	push();
	// 	rotate(this.theta);
	// 	this.branch(length);
	// 	pop();
	// 	push();
	// 	rotate(-this.theta);
	// 	this.branch(length);
	// 	pop();
	// }

	display() {
		// if (mouseMovedFromInitPosition) {
		// 	this.theta = map(mouseX, 0, width, 0, PI);
		// } else {
		// 	this.theta = PI * 1/7;
		// }
		//
		// stroke(50);
		// push();
		// translate(width/2, height);
		// this.branch(this.initialBranchLength, this.branchWidth);
		// pop();

		this.branches.forEach(branch => branch.display());
	}

}

function windowResized() {
	resizeCanvas(
		window.innerWidth,
		window.innerHeight);
	}
