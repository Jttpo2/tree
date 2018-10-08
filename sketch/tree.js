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

		this.branchingFactor = 2;
		this.toPreviousBranchLengthRatio = 2/3;
		this.thinningFactor = 5/10;
		this.theta = PI/8;
		this.aspectRatio = 1/30;
		this.minLength = 2;

		this.stdDevForAngle = PI / 0;
		this.stdDevForLength = 1/20;
		this.stdDevForBranching = 1;

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
		this.branches.forEach(prevBr => {
			next.push(prevBr);
			let noOfBranches = randomGaussian(this.branchingFactor, this.stdDevForBranching);
			for (let i=0; i<noOfBranches; i++ ) {
				let start = prevBr.getEnd();
				let angle = randomGaussian(0, this.theta);

				let toPreviousLengthRatioLeft = randomGaussian(this.toPreviousBranchLengthRatio, this.stdDevForLength);
				let toPreviousLengthRatioRight = randomGaussian(this.toPreviousBranchLengthRatio, this.stdDevForLength);

				next.push(
					new Branch(
						start,
						prevBr.getDirlength().mult(toPreviousLengthRatioRight).rotate(angle),
						this.aspectRatio * this.thinningFactor
					)
				);
				// next.push(
				// 	new Branch(
				// 		start,
				// 		prevBr.getDirlength().mult(this.toPreviousBranchLengthRatio).rotate(rightAngle),
				// 		this.aspectRatio
				// 	));
			}
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
