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
		this.branchDepth = 6;

		this.initialBranchLength = height * 1/3;

		this.toPreviousBranchLengthRatio = 2/3;
		this.theta = PI/8;
		this.aspectRatio = 1/25;
		this.minLength = 2;

		let foot = createVector(width/2, height);
		let dirLength = createVector(0, -this.initialBranchLength);
		this.branches.push(
			new Branch(
				foot,
				dirLength,
				this.aspectRatio
			)
		);

		for (let b=0; b<this.branchDepth; b++) {
			this.generate();
		}
	}

	generate() {
		let next = [];
		this.branches.forEach(b => {
			next.push(b);
			let start = b.getEnd();
			let standardDev = PI / 30;
			let leftAngle = randomGaussian(-this.theta, standardDev);
			let rightAngle = randomGaussian(this.theta, standardDev);
			next.push(
				new Branch(
					start,
					b.getDirlength().mult(this.toPreviousBranchLengthRatio).rotate(leftAngle),
					this.aspectRatio
				)
			);
		 	next.push(
				new Branch(
					start,
					b.getDirlength().mult(this.toPreviousBranchLengthRatio).rotate(rightAngle),
					this.aspectRatio
					));
		});
		this.branches = next;
	}

	display() {
		// if (mouseMovedFromInitPosition) {
		// 	this.theta = map(mouseX, 0, width, 0, PI);
		// } else {
		// 	this.theta = PI * 1/7;
		// }
		this.branches.forEach(branch => branch.display());
	}
}

function windowResized() {
	resizeCanvas(
		window.innerWidth,
		window.innerHeight);
	}
